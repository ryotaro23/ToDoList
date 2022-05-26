import React from 'react';
import { Task } from '../';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme:any) => ({
  title: {
    fontSize: '100',
    fontWeight:'bold',
  },
  task:{
    width:'50%',
    display:'inline',
  },
  deadline:{
    float:'right',
    width:'50%',
    display:'inline',
  },
  clock:{
    float:'left',
  },

}));

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deadline:string;
  setDeadline:React.Dispatch<React.SetStateAction<string>>;

};
export const TaskList: React.FC<Props> = ({ tasks, setTasks,deadline ,setDeadline }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  const classes = useStyles();

  return (
    <ul>
      {tasks.map((task, index) => (
        <>
        <List>
          <ListItem key={`todo-${index}`} role={undefined} dense divider >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.isDone}
                tabIndex={-1}
                disableRipple
                onChange={(e) => handleCheckBox(e, index)}
              />
            </ListItemIcon>          
            <ListItemText primaryTypographyProps={{
              color: 'primary',
              variant: 'body1',
            }} 
            className={classes.title} primary={
              task.isDone ? <><Typography className={classes.task} variant="h5"><s>{task.label}</s></Typography><Typography variant="h5" className={classes.deadline}><ScheduleIcon className={classes.clock}/>{task.oneday}</Typography></> 
              : <><Typography className={classes.task} variant="h5">{task.label}</Typography><Typography variant="h5" className={classes.deadline}><ScheduleIcon className={classes.clock}/>{task.oneday}</Typography></> 
            }/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
            </>
      ))}     
    </ul>
    
  );
};
