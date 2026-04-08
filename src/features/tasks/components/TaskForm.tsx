interface Props {
    taskText: string
    onTaskTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onAddTask: () => void
}

export function TaskForm({ taskText, onTaskTextChange, onAddTask }: Props) {
    return (
        <section>
            <h3>Agregar tarea</h3>

            <input
                type="text"
                value={taskText}
                onChange={onTaskTextChange}
                placeholder="Escriba una tarea"
            />

            <button onClick={onAddTask}>Agregar</button>
        </section>
    )
}