import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function TaskList({ tasks, onDeleteTask, onToggleTask }) {
    const handleDelete = (taskId) => (event) => {
        event.stopPropagation();
        onDeleteTask(taskId);
    };

    const handleToggle = (taskId) => (event) => {
        onToggleTask(taskId);
    };

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {tasks.map((task) => {
                const labelId = `checkbox-list-label-${task.id}`;

                return (
                    <ListItem
                        key={task.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(task.id)}
                                checked={task.completed}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                        sx={{
                            '&:hover': {
                                backgroundColor: 'action.hover'
                            }
                        }}
                    >
                        <ListItemButton
                            sx={{ flex: 1 }}
                            onClick={handleToggle(task.id)}
                        >
                            <ListItemText
                                id={labelId}
                                primary={
                                    task.completed ?
                                        <del style={{ color: '#999' }}>{task.text}</del> :
                                        task.text
                                }
                            />
                        </ListItemButton>

                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={handleDelete(task.id)}
                            sx={{
                                marginLeft: 2,
                                color: 'error.main',
                                '&:hover': {
                                    backgroundColor: 'error.light',
                                    color: 'error.contrastText'
                                }
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                );
            })}
        </List>
    );
}