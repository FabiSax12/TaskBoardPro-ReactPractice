import { TaskBoard } from "../../features/tasks/components/TaskBoard"
import { ThemeToggle } from "../../features/theme/components/ThemeToggle";
import { HTML_TAGS } from "../../shared/constants/html-tags.constants"
import '../../index.css'
import { useTheme } from "../../features/theme/hooks/useTheme";

export const AppContent = () => {
    const MainTag = HTML_TAGS.MAIN;
    const HeaderTag = HTML_TAGS.H1;

    const { theme } = useTheme()

    return (
        <MainTag className={theme}>
            <HeaderTag>TaskBoard Hooks Lab</HeaderTag>
            <ThemeToggle />
            <TaskBoard />
        </MainTag>
    )
}