import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TaskFilters } from "./TaskFilters"
import { useFilteredTasks } from "../hooks/useFilteredTasks"
import { useTaskForm } from "../hooks/useTaskForm"
import { useTasks } from "../hooks/useTasks"

export function TaskBoard() {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H2;

    const { tasks, addTask, deleteTask, toggleTask } = useTasks();

    const {
        searchText,
        statusFilter,
        handleSearchTextChange,
        handleStatusFilterChange,
        filteredTasks,
    } = useFilteredTasks(tasks);

    const { taskText, handleAddTask, handleTaskTextChange } = useTaskForm(addTask);

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.BOARD_TITLE}</HeaderTag>

            <TaskForm
                taskText={taskText}
                onTaskTextChange={handleTaskTextChange}
                onAddTask={handleAddTask}
            />

            <TaskFilters
                searchText={searchText}
                statusFilter={statusFilter}
                onSearchTextChange={handleSearchTextChange}
                onStatusFilterChange={handleStatusFilterChange}
            />

            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleCompletion={toggleTask} />
        </SectionTag>
    )
}