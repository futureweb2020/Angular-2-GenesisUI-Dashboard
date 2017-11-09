import { Injectable } from '@angular/core';

import { StepStatus } from '../models/step-status.enum';
import { WizardType } from '../models/wizard-type.enum';
import { ActivityType } from '../models/activity-type.enum';

let wizards = [
  {
    id: "1",
    name: "Prof Violinsky",
    type: WizardType.Learn,
    activities: [
      {
        name: "Pre-lesson Warmup",
        duration: 30,
        times: 1,
        status: StepStatus.Planned
      },
      {
        name: "Lesson: [[TeacherLessonNote]]",
        duration: 60,
        times: 1,
        status: StepStatus.Planned
      },
      {
        name: "Post-lesson Planning",
        duration: 30,
        times: 1,
        status: StepStatus.Planned
      }
    ]
  },
  {
    id: "2",
    name: "Bowing #1",
    type: WizardType.Challenge,
    activities: [
      {
        name: "Weight - Bow factor Exercises",
        duration: 60,
        times: 2,
        status: StepStatus.Completed
      },
      {
        name: "Tilt - Bow factor Exercises",
        duration: 60,
        times: 2,
        status: StepStatus.Planned
      },
      {
        name: "Contact Point - Bow factor Exercises",
        duration: 30,
        times: 1,
        status: StepStatus.PlannedError
      },
      {
        name: "Speed - Bow factor Exercises",
        duration: 30,
        times: 1,
        status: StepStatus.PlannedDependency
      },
      {
        name: "Slow Bow - Bow factor Exercises",
        duration: 0,
        times: 0,
        status: StepStatus.NotPlanned
      }
    ]
  },
  {
    id: "3",
    name: "Audition Prep",
    type: WizardType.Practice,
    activities: [
      {
        name: "Practice Piece",
        duration: 30,
        times: 1,
        status: StepStatus.Planned,
        piece: {
          name: "Salut d'amour"
        }
      },
      {
        name: "Audition",
        duration: 0,
        times: 0,
        status: StepStatus.NotPlanned,
        deadline: new Date()
      }
    ]
  },
  {
    id: "4",
    name: "Studio",
    type: WizardType.Studio,
    activities: [
      {
        name: "Practice Piece",
        duration: 0,
        times: 0,
        status: StepStatus.NotPlanned,
        type: ActivityType.Piece
      },
      {
        name: "Record Piece & Upload",
        duration: 0,
        times: 0,
        status: StepStatus.NotPlanned,
        type: ActivityType.Recording,
        deadline: new Date()
      },
      {
        name: "Review Other Recordings",
        duration: 0,
        times: 0,
        status: StepStatus.NotPlanned,
        type: ActivityType.Reflection,
        numReviewToDo: 2,
        numReviewDone: 0
      }
    ]
  }
];

@Injectable()
export class WizardService {

  constructor() { }

  getWizards() {
    return wizards;
  }
}
