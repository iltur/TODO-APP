import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TaskListPageModule } from './pages/task-list.page-module';
import { NewTaskPageModule } from './pages/new-task.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'tasks', 
        loadChildren: () => TaskListPageModule
      },
  { 
        path: 'newtask', 
        loadChildren: () => NewTaskPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
