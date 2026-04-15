import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import type { Task } from "../types/Task"
import { TaskCard } from "./TaskCard";

interface Props {
    tasks: Task[]
    onToggleCompletion: (id: Task["id"]) => void
    onDeleteTask: (id: Task["id"]) => void
}

export function TaskList({ tasks, onDeleteTask, onToggleCompletion }: Props) {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H3;
    const ParagraphTag = HTML_TAGS.P;
    const ListTag = HTML_TAGS.UL;

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.TASK_LIST_TITLE}</HeaderTag>

            {tasks.length === 0 ? (
                <ParagraphTag>{TASK_UI_TEXT.TASK_LIST_EMPTY}</ParagraphTag>
            ) : (
                <ListTag>
                    {tasks.map((task) => <TaskCard
                        key={task.id}
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onToggleCompletion={onToggleCompletion}
                    />)}
                </ListTag>
            )}
        </SectionTag>
    )
}