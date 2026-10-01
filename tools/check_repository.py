"""Check local links, catalogue coverage, SVGs and JavaScript syntax."""
from pathlib import Path
from html.parser import HTMLParser
import json,re,subprocess,tempfile,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]
items=json.loads((root/'assets/projects.js').read_text(encoding='utf-8').split('window.MINI_PROJECTS = ',1)[1].strip().removesuffix(';'))
errors=[]
def check(condition,message):
    if not condition: errors.append(message)
check(len(items)==100,'Expected 100 projects')
check(len({p['id'] for p in items})==100,'Duplicate project IDs')
class Links(HTMLParser):
    def handle_starttag(self,tag,attrs):
        for key,value in attrs:
            if key in ['src','href'] and value and not re.match(r'^(?:[a-z]+:|#|//)',value,re.I):
                target=(self.file.parent/value.split('#')[0].split('?')[0]).resolve()
                check(target.is_relative_to(root),f'Link escapes repository: {self.file}: {value}')
                check(target.exists(),f'Broken local link: {self.file}: {value}')
for item in items:
    for filename in ['index.html','README.md']:check((root/item['slug']/filename).is_file(),f'Missing {item["slug"]}/{filename}')
    check((root/'assets/previews'/f'{item["slug"]}.svg').is_file(),f'Missing preview for {item["slug"]}')
files=list(root.glob('[0-9]*/index.html'))+[root/'index.html']
with tempfile.TemporaryDirectory() as tmp:
    scripts=list((root/'assets').glob('*.js'))
    for file in files:
        source=file.read_text(encoding='utf-8');check('</html>' in source.lower(),f'Incomplete HTML: {file.name}');parser=Links();parser.file=file;parser.feed(source)
        for i,match in enumerate(re.finditer(r'<script\b([^>]*)>([\s\S]*?)</script>',source,re.I)):
            if 'src=' not in match[1]:
                script=Path(tmp)/f'{file.parent.name}-{i}.js';script.write_text(match[2],encoding='utf-8');scripts.append(script)
    for file in scripts:
        result=subprocess.run(['node','--check',str(file)],capture_output=True,text=True)
        check(result.returncode==0,f'JavaScript syntax: {file}: {result.stderr}')
for svg in (root/'assets/previews').glob('*.svg'):
    try:ET.parse(svg)
    except ET.ParseError as error:errors.append(f'Invalid SVG: {svg}: {error}')
for file in [root/'README.md',root/'CONTRIBUTING.md',*root.glob('docs/*.md'),*root.glob('[0-9]*/README.md')]:
    for value in re.findall(r'\]\(([^)]+)\)',file.read_text(encoding='utf-8')):
        if not re.match(r'^(?:[a-z]+:|#)',value,re.I):check((file.parent/value.split('#')[0]).exists(),f'Broken Markdown link: {file}: {value}')
if errors:
    print('\n'.join(errors));raise SystemExit(1)
print(f'Passed: {len(items)} projects, {len(files)} pages, local links, SVG previews and JavaScript syntax.')
