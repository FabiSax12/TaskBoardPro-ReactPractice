import { TaskBoard } from "../../features/tasks/components/TaskBoard"
import { HTML_TAGS } from "../../shared/constants/html-tags.constants"

export const AppContent = () => {
    const MainTag = HTML_TAGS.MAIN;
    const HeaderTag = HTML_TAGS.H1;

    return (
        <MainTag>
            <HeaderTag>TaskBoard Hooks Lab</HeaderTag>
            <TaskBoard />
        </MainTag>
    )
}