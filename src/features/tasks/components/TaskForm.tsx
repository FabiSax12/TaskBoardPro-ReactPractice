import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

interface Props {
    taskText: string
    onTaskTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onAddTask: () => void
}

export function TaskForm({ taskText, onTaskTextChange, onAddTask }: Props) {
    const SectionTag = HTML_TAGS.SECTION;
    const HeaderTag = HTML_TAGS.H3;
    const InputTag = HTML_TAGS.INPUT;
    const ButtonTag = HTML_TAGS.BUTTON;

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.FORM_TITLE}</HeaderTag>

            <InputTag
                type="text"
                value={taskText}
                onChange={onTaskTextChange}
                placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
            />

            <ButtonTag onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</ButtonTag>
        </SectionTag>
    )
}