import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import type { Task } from "../types/Task"

interface Props {
    tasks: Task[]
}

export function TaskList({ tasks }: Props) {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H3;
    const ParagraphTag = HTML_TAGS.P;
    const ListTag = HTML_TAGS.UL;
    const ListItemTag = HTML_TAGS.LI;

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.TASK_LIST_TITLE}</HeaderTag>

            {tasks.length === 0 ? (
                <ParagraphTag>{TASK_UI_TEXT.TASK_LIST_EMPTY}</ParagraphTag>
            ) : (
                <ListTag>
                    {tasks.map((task) => (
                        <ListItemTag key={task.id}>{task.title}</ListItemTag>
                    ))}
                </ListTag>
            )}
        </SectionTag>
    )
}