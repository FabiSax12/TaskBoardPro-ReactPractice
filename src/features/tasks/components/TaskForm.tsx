import { useEffect, useId, useRef } from "react"
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
    const LabelTag = HTML_TAGS.LABEL;

    const inputRef = useRef<HTMLInputElement>(null)
    const taskInputId = useId()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <SectionTag>
            <HeaderTag>{TASK_UI_TEXT.FORM_TITLE}</HeaderTag>

            <LabelTag htmlFor={taskInputId}>{TASK_UI_TEXT.INPUT_LABEL}</LabelTag>
            <InputTag
                ref={inputRef}
                type="text"
                value={taskText}
                onChange={onTaskTextChange}
                placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
            />

            <ButtonTag onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</ButtonTag>
        </SectionTag>
    )
}