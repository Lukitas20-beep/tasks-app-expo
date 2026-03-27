import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import TaskItem from "./TaskItem"
interface TaskListProps {
  tasks: Array<{ id: string; title: string; done: boolean }>;
  onToggleDone: (id: string) => void;
  onRemove: (id: string) => void;
}

export const TaskList = ({ tasks, onToggleDone, onRemove }: TaskListProps) => {
  return (
    <FlatList
      data={tasks} 
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => ( 
        <TaskItem> 
          task={item} 
          onToggleDone={onToggleDone} 
          onRemove={onRemove} 
        </TaskItem>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};


const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
});
