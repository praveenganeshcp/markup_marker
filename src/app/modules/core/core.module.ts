import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BuilderComponent } from './pages/builder/builder.component';
import { ColouredPropsFormComponent } from './components/coloured-props-form/coloured-props-form.component';
import { BorderstyledPropsFormComponent } from './components/borderstyled-props-form/borderstyled-props-form.component';
import { MeasurementPropsFormComponent } from './components/measurement-props-form/measurement-props-form.component';
import { PaddingPropsFormComponent } from './components/padding-props-form/padding-props-form.component';
import { FontMeasuredPropsFormComponent } from './components/font-measured-props-form/font-measured-props-form.component';
import { FlexContainerPropsFormComponent } from './components/flex-container-props-form/flex-container-props-form.component';
import { EditWidgetPropsComponent } from './components/edit-widget-props/edit-widget-props.component';
import { WidgetsListComponent } from './components/widgets-list/widgets-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CounterComponent } from './components/counter/counter.component';
import { WidgetMenuComponent } from './components/widget-menu/widget-menu.component';
import { CodeOutputComponent } from './components/code-output/code-output.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextPropsFormComponent } from './components/text-props-form/text-props-form.component';
import { ViewCodeComponent } from './components/view-code/view-code.component';
import { HelpBannerComponent } from './components/help-banner/help-banner.component';
import { BoxShadowPropsFormComponent } from './components/box-shadow-props-form/box-shadow-props-form.component';


@NgModule({
  declarations: [BuilderComponent, ColouredPropsFormComponent, BorderstyledPropsFormComponent, MeasurementPropsFormComponent, PaddingPropsFormComponent, FontMeasuredPropsFormComponent, FlexContainerPropsFormComponent, EditWidgetPropsComponent, WidgetsListComponent, TopBarComponent, CounterComponent, WidgetMenuComponent, CodeOutputComponent, TextPropsFormComponent, ViewCodeComponent, HelpBannerComponent, BoxShadowPropsFormComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule
  ],
})
export class CoreModule { }
