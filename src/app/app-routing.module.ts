import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './components/blog/blog.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
component: BlogComponent,
},
{
  path: 'quiz',
    component: QuizComponent,

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
