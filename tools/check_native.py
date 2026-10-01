"""Compile and exercise all eight native programs; requires GCC or CC."""
from pathlib import Path
import os,shlex,subprocess,tempfile
root=Path(__file__).resolve().parents[1]
cases={1:[(['Jay'],'Hello, Jay!'),([], 'Hello, World!')],3:[(['C','100'],'212'),(['F','32'],'0')],8:[(['29'],'prime'),(['1'],'not prime'),(['25'],'not prime')],12:[(['5'],'120'),(['0'],'1')],14:[(['12','18'],'gcd=6 lcm=36'),(['0','0'],'gcd=0 lcm=0')],25:[(['1','2','3','4'],'count=4 sum=10 min=1 max=4 mean=2.5 median=2.5')],27:[(['7','1','3','5','7','9'],'index=3'),(['2','1','3'],'not found')],28:[(['5','2','9','1'],'1 2 5 9'),(['2','2','-1'],'-1 2 2')]}
invalid={1:['A','B'],3:['X','10'],8:['1.5'],12:['21'],14:['-1','2'],25:['NaN'],27:['2','3','1'],28:['bad']}
with tempfile.TemporaryDirectory() as temp:
 for n,examples in cases.items():
    folder=next(root.glob(f'{n:02d}-*'));binary=Path(temp)/(f'project{n}'+('.exe' if os.name=='nt' else ''))
    subprocess.run([*shlex.split(os.environ.get('CC','gcc')),'-std=c11','-Wall','-Wextra','-Werror',str(folder/'main.c'),'-o',str(binary)],check=True)
    for arguments,expected in examples:
        result=subprocess.run([str(binary),*arguments],capture_output=True,text=True,check=True);assert result.stdout.strip()==expected,(n,result.stdout,expected)
    result=subprocess.run([str(binary),*invalid[n]],capture_output=True,text=True);assert result.returncode!=0 and result.stderr,(n,'Invalid input accepted')
print('Passed: eight C programs compile cleanly and accept/reject documented examples.')
