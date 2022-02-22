import {PlannerTask} from './../../shared/models/planner-task.model';
import {Component, OnInit} from '@angular/core';

enum FilterOptions {
    Pending = 0,
    Done = 1,
    All = 2
}

@Component({selector: 'app-planner', templateUrl: './planner.component.html', styleUrls: ['./planner.component.scss']})
export class PlannerComponent implements OnInit {

    plannerTasks : PlannerTask[] = [
        {
            description: 'Buy potatoes',
            done: false
        }, {
            description: 'Feed ze cat and Feed ze cat and Feed ze cat and Feed ze cat and Feed ze cat and Feed ze cat and Feed ze cat and ',
            done: false
        },
    ];
    taskInputValue = '';
    visibleTasks?: PlannerTask[];
    filterOptions = FilterOptions;
    selectedFilterType = FilterOptions.All;

    constructor() {}

    pendingTaskCount : number = 0;

    addTask(): void {
        const trimmedValue = this.taskInputValue.trim();
        const newTask = {
            description: trimmedValue,
            done: false

        }

        if (trimmedValue) {
            this.plannerTasks.push(newTask);
            this.taskInputValue = '';
            this.setPendingTaskCount();
        }
        this.setVisibleTasks();
    }

    setVisibleTasks(): void {
        if (this.selectedFilterType === FilterOptions.Pending) {
            this.visibleTasks = this.plannerTasks.filter(task => !task.done);
        } else if (this.selectedFilterType === FilterOptions.Done) {
            this.visibleTasks = this.plannerTasks.filter(task => task.done);
        } else {
            this.visibleTasks = [...this.plannerTasks];
        }
    }

    setPendingTaskCount(): void {
        this.pendingTaskCount = this.plannerTasks.filter(task => !task.done).length;
    }

    deleteTask(index : number): void {
        this.plannerTasks.splice(index, 1);
        this.setPendingTaskCount();
        this.setVisibleTasks();
    }

    clearAllTasks(): void {
        this.plannerTasks = [];
        this.setPendingTaskCount();
        this.setVisibleTasks();
    }

    ngOnInit(): void {
        this.setVisibleTasks();
        this.visibleTasks = this.plannerTasks;
    }

    setSelectedFilterType(type : FilterOptions): void {
        this.selectedFilterType = type;
        this.setVisibleTasks();
    }

}
