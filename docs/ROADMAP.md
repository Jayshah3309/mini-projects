# Development roadmap

Complete the documented acceptance example and appropriate checks before marking a planned page as a demo. Preserve numbered paths.

## [66. Student Database](../66-student-database/README.md)

- [x] Goal: add ID 101, search it, update and delete it.
- [x] Define validated records with unique IDs and storage.
- [x] Document runtime, persistence and errors; add meaningful checks.
- [x] Update status only after functionality exists.

## [67. Library Management](../67-library-management/README.md)

- [x] Goal: borrow an available book and restore availability on return.
- [x] Track book records and loan state.
- [x] Document runtime, persistence and errors; add meaningful checks.
- [x] Update status only after functionality exists.

## [68. Banking System](../68-banking-system/README.md)

- [ ] Goal: deposit 100 in a sample account and reject overdrafts.
- [ ] Validate simulated transactions and retain an operation history.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [69. Employee Management](../69-employee-management/README.md)

- [ ] Goal: add a unique employee ID and filter by department.
- [ ] Validate employee records and provide editing/search.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [70. Inventory Management](../70-inventory-management/README.md)

- [x] Goal: create a SKU and reject stock reductions below zero.
- [x] Track quantities and stock changes.
- [x] Document runtime, persistence and errors; add meaningful checks.
- [x] Update status only after functionality exists.

## [76. TCP Chat Server](../76-tcp-chat-server/README.md)

- [ ] Goal: connect two clients and exchange newline-delimited messages.
- [ ] Choose a server runtime and define message framing.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [77. TCP Chat Client](../77-tcp-chat-client/README.md)

- [ ] Goal: connect to the paired server, send and disconnect.
- [ ] Read/write framed messages over a TCP socket.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [78. HTTP Client](../78-http-client/README.md)

- [ ] Goal: send GET and display status, headers and response.
- [ ] Use fetch or a documented client runtime.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [79. HTTP Server](../79-http-server/README.md)

- [ ] Goal: GET /health returns JSON with status 200.
- [ ] Choose a server runtime and define routes.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [80. Multi Threaded Calculator](../80-multi-threaded-calculator/README.md)

- [ ] Goal: calculate while the main page remains responsive.
- [ ] Use browser workers or a documented native threading runtime.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [81. Mini Compiler](../81-mini-compiler/README.md)

- [ ] Goal: tokenize a sample and produce documented instructions.
- [ ] Define grammar, tokenize, parse and generate intermediate code.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [82. Simple Interpreter](../82-simple-interpreter/README.md)

- [ ] Goal: evaluate a valid sample and report a line-aware syntax error.
- [ ] Define grammar, parse an AST and evaluate it.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [83. Virtual Machine](../83-virtual-machine/README.md)

- [ ] Goal: PUSH 2, PUSH 3, ADD yields stack [5].
- [ ] Define opcodes, program counter and bounded execution.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [84. Database Engine](../84-database-engine/README.md)

- [ ] Goal: insert a record and retrieve it by indexed key.
- [ ] Define storage format, tables and query operations.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [85. File System Simulator](../85-file-system-simulator/README.md)

- [ ] Goal: create a directory, write a file and read it back.
- [ ] Represent directories and files as explicit node types.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [86. Cpu Scheduler](../86-cpu-scheduler/README.md)

- [ ] Goal: display FCFS waiting and turnaround times.
- [ ] Define arrival/burst inputs and a scheduling policy.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [87. Process Scheduler](../87-process-scheduler/README.md)

- [ ] Goal: move a process ready-to-running-to-waiting and back.
- [ ] Define allowed transitions, ready queue and dispatcher.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [88. Memory Management Simulator](../88-memory-management-simulator/README.md)

- [ ] Goal: visualize allocations and explain a failed request.
- [ ] Define blocks or page frames and a memory policy.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [89. Disk Scheduling Simulator](../89-disk-scheduling-simulator/README.md)

- [ ] Goal: compare FCFS and SSTF head movement.
- [ ] Compute service sequence and total movement.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [90. Cache Simulator](../90-cache-simulator/README.md)

- [ ] Goal: show hits/misses for a reference sequence.
- [ ] Define cache tags and a replacement policy.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [91. Operating System Simulator](../91-operating-system-simulator/README.md)

- [ ] Goal: link process states to bounded resource usage.
- [ ] Compose explicitly simulated subsystems.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [92. Packet Analyzer](../92-packet-analyzer/README.md)

- [ ] Goal: explain fields of an uploaded sample packet.
- [ ] Define input format and decode headers.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [93. Mini Debugger](../93-mini-debugger/README.md)

- [ ] Goal: step a sample program and inspect variables.
- [ ] Integrate stepping/breakpoints with an interpreter or VM.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [94. Static Code Analyzer](../94-static-code-analyzer/README.md)

- [ ] Goal: show a finding with its line, rule and suggested fix.
- [ ] Define target language and explanatory rules.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [95. Embedded CLI Framework](../95-embedded-cli-framework/README.md)

- [ ] Goal: register help and reject an unknown command.
- [ ] Define parsing, command handlers and bounded buffers.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [96. RTOS Task Simulator](../96-rtos-task-simulator/README.md)

- [ ] Goal: choose a ready task under a declared priority rule.
- [ ] Define states, priorities and deterministic scheduling.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [97. UART Terminal](../97-uart-terminal/README.md)

- [ ] Goal: connect to an approved port and exchange sample text.
- [ ] Use a supported serial API or native runtime.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [98. Bootloader Simulator](../98-bootloader-simulator/README.md)

- [ ] Goal: reject a mock invalid image and show boot states.
- [ ] Define a mock image format and validation rules.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [99. Embedded Logging Library](../99-embedded-logging-library/README.md)

- [ ] Goal: filter INFO/ERROR messages and show timestamps.
- [ ] Define levels, format, buffers and logger interface.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

## [100. C Utility Toolkit](../100-c-utility-toolkit/README.md)

- [ ] Goal: compile one small C utility with documented input/output.
- [ ] Add C source, build instructions and platform requirements.
- [ ] Document runtime, persistence and errors; add meaningful checks.
- [ ] Update status only after functionality exists.

