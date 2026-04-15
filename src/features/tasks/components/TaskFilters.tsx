import { TASK_STATUS } from "../constants/task-filters.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"

interface Props {
    searchText: string;
    statusFilter: string;
    onSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStatusFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function TaskFilters({
    searchText,
    statusFilter,
    onSearchTextChange,
    onStatusFilterChange,
}: Props) {
    return (
        <section>
            <h3>{TASK_UI_TEXT.FILTERS_TITLE}</h3>

            <input
                type="text"
                value={searchText}
                onChange={onSearchTextChange}
                placeholder={TASK_UI_TEXT.FILTERS_SEARCH_PLACEHOLDER}
            />

            <select value={statusFilter} onChange={onStatusFilterChange}>
                <option value={TASK_STATUS.ALL}>{TASK_UI_TEXT.FILTER_ALL}</option>
                <option value={TASK_STATUS.PENDING}>{TASK_UI_TEXT.FILTER_PENDING}</option>
                <option value={TASK_STATUS.COMPLETED}>{TASK_UI_TEXT.FILTER_COMPLETED}</option>
            </select>
        </section>
    )
}