// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/555ea54770b8576162e761e344de969d6e960869/angular-wizard/index.d.ts
declare module 'angular-wizard' {
// Type definitions for Angular Wizard 0.6.1
// Project: https://github.com/mgonto/angular-wizard
// Definitions by: Marko Jurisic <https://github.com/mjurisic>, Ronald Wildenberg <https://github.com/rwwilden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as angular from 'angular';

module 'angular' {
  export namespace mgoAngularWizard {
    interface WizardHandler {
      wizard(name?: string): Wizard;
      addWizard(name: string, wizard: Wizard): void;
      removeWizard(name: string): void;
    }

    interface Wizard {
      next(nextHandler?: () => boolean): void;
      previous(): void;
      cancel: () => void;
      goTo(step: number | string): void;
      finish(): void;
      reset: () => void;

      addStep: (step: WzStep) => void;
      currentStep: () => WzStep;
      currentStepNumber(): number;
      currentStepDescription: () => string;
      currentStepTitle: () => string;
      getEnabledSteps(): WzStep[];
    }

    interface WzStep {
      canenter: (...args: any[]) => boolean;
      canexit: (...args: any[]) => boolean;
      description: string;
      selected: boolean;
      title: string;
      wzData: any;
      wzTitle: string;
    }
  }
}
}