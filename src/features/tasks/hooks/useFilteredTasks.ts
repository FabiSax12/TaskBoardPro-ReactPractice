import { useCallback, useState, useMemo } from "react";
import { type TaskStatus, TASK_STATUS } from "../constants/task-filters.constants";
import type { Task } from "../types/Task";

export const useFilteredTasks = (tasks: Task[]) => {

    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState<TaskStatus>(TASK_STATUS.ALL);

    const handleSearchTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }, [])

    const handleStatusFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value as TaskStatus);
    }, [])

    const filteredTasks = useMemo(() => tasks.filter((task) => {
        const matchesSearchText = task.title.toLowerCase().includes(searchText.toLowerCase());
        const matchesStatusFilter =
            statusFilter === TASK_STATUS.ALL ||
            (statusFilter === TASK_STATUS.COMPLETED && task.completed) ||
            (statusFilter === TASK_STATUS.INCOMPLETE && !task.completed);
        return matchesSearchText && matchesStatusFilter;
    }), [tasks, searchText, statusFilter]);

    return {
        filteredTasks,
        searchText,
        handleSearchTextChange,
        statusFilter,
        handleStatusFilterChange,
    }
}