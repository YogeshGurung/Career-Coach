import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

interface ICardData {
    data1: any;
    data2: any;
    data3: any;
    data4: any;
    data5: any;
    data6: any;
}

interface ICard {
    title: string;
    description: string;
}
let $this: any;
@Component({
    selector: 'app-card-drag',
    templateUrl: './card-drag.component.html',
    styleUrls: ['./card-drag.component.scss']
})
export class CardDragComponent {
    levelOneCard = [
        { title: 'Active Learning', description: 'Giving full attention to whatever people are saying, understanding, questioning, and interrupting only at appropriate times' },
        { title: 'Presentation', description: 'Public speaking, instruct, train or teach, perform' },
        { title: 'Time management', description: "Managing one's own time and the time of others" },
        { title: 'Persuading', description: 'Persuading others to change their minds or behaviour' },
        { title: 'Selling', description: 'Influence others to buy services, product or ideas and concepts' },
        { title: 'Monitoring', description: 'Monitoring performance of yourself, other individual to make inprovements or take corrective action' },
        { title: 'Troubleshooting', description: 'Determining causes of operating errors and actions to rectify' },
        { title: 'Science', description: 'Using scientific rules, methods and processes to solve problem' },
        { title: 'System analyis', description: 'Determining how a system work and changes in condition' },
        { title: 'Designing', description: 'Concieve, create, develop a plan, project' },
        { title: 'Operation Analysis', description: 'Analysing needs and product requirements to create a design' },
        { title: 'Programming', description: 'Writing computer programs for various purposes' },
        { title: 'Managing Material resources', description: 'Obtaining and seeing to the appropriate use of equipment, facilities needed to do certain work' },
        { title: 'Installation', description: 'Installing equipment, machines,wiring or programs to specification' },
        { title: 'Operation and Control', description: 'Controlling operations of equipement or systems' },
        { title: 'Repairing', description: 'Repairing machines or systems using tools' },
        { title: 'Quality Control Analysis', description: 'Conducting tests and inspections of products, services, to evaluate quality or performance' },
        { title: 'Equipment Maintenance', description: 'Performing routine maintenance on equipment and determining when and what kind of maintenance is needed' },
        { title: 'System Evaluation', description: 'Identifying measures of performance and the actions needed to improve or correct performace, relative to goals' },
        { title: 'Technology Design', description: 'Generating or adapting equipement and technology to user needs' },
        { title: 'Nurture', description: 'Culture and foster the developement of the individual in relation to health or skills and ability' },
        { title: 'Operations Monitoring', description: 'Watching gauges, dials, or other indicators to ensure machines work properly' },
        { title: 'Creating', description: 'Handicrafts, creating art, composing music' },
        { title: 'Instructing', description: 'Teaching others how to do something' },
        { title: 'Problem Solving', description: 'Deductive reasoning, idea generation, diagnose factors or issues' },
        { title: 'Managing Personnel resources', description: 'Motivating, developing and directing people as they work and identifying the best people for the job' },
        { title: 'Learning strategies', description: 'Selecting and using training/instructional methods when learning or teaching new things' },
        { title: 'Managing financial resources', description: 'Determining how money will be spent to complete work and accounting for expenditures' },
        { title: 'Administration', description: 'Working with systems, data and procedures attend to detail' },
        { title: 'Critical Thinking', description: 'Using logic and reasoning to identify the strengths and weakness of alternative solution approaches to problem' }
    ];

    barrier: Array<ICard> = [];
    couldDoWithout: Array<ICard> = [];
    essentialForSatisfation: Array<ICard> = [];
    niceToHave: Array<ICard> = [];
    totalCardColumn = 6;
    cardData = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
    totalCard: Array<ICard> = [];
    cardListData: ICardData = {
        data1: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: []
    };
    constructor(protected router: Router) {
        this.totalCard = [...this.levelOneCard];
        this.getEqualCard(this.totalCard);
        $this = this;
    }

    getEqualCard(level1Card: any) {
        console.log(level1Card);
        const amountFraction = level1Card.length / this.totalCardColumn;
        const amount = Math.round(amountFraction);

        const cardContent = this.shuffleArray(level1Card);
        for (let j = 0; j <= amount; j++) {
            for (let i = 0; i < this.cardData.length; i++) {
                if (i === 0 && cardContent[0]) this.cardListData.data1.push(cardContent[0]);
                if (i === 1 && cardContent[0]) this.cardListData.data2.push(cardContent[0]);
                if (i === 2 && cardContent[0]) this.cardListData.data3.push(cardContent[0]);
                if (i === 3 && cardContent[0]) this.cardListData.data4.push(cardContent[0]);
                if (i === 4 && cardContent[0]) this.cardListData.data5.push(cardContent[0]);
                if (i === 5 && cardContent[0]) this.cardListData.data6.push(cardContent[0]);
                cardContent.shift();
            }
        }
    }

    shuffleCard() {
        console.log(this.levelOneCard);
        for (let item in this.cardData) {
            this.cardListData.data1 = this.shuffleArray(this.cardListData.data1);
            this.cardListData.data2 = this.shuffleArray(this.cardListData.data2);
            this.cardListData.data3 = this.shuffleArray(this.cardListData.data3);
            this.cardListData.data4 = this.shuffleArray(this.cardListData.data4);
            this.cardListData.data5 = this.shuffleArray(this.cardListData.data5);
            this.cardListData.data6 = this.shuffleArray(this.cardListData.data6);
        }
    }

    shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    drop(event: CdkDragDrop<ICard[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }

        this.checkIfLevelCompleted();
    }

    checkIfLevelCompleted() {
        const totalSelectedCard = this.barrier.length + this.couldDoWithout.length + this.essentialForSatisfation.length + this.niceToHave.length;
        if (totalSelectedCard === $this.levelOneCard.length) {
            this.showResult();
        }
    }

    showResult() {
        window.localStorage.setItem('gameResult', JSON.stringify(this.getResult()));
        this.router.navigate(['/result']);
    }

    getResult() {
        return {
            barrier: {
                title: 'Barrier',
                value: this.barrier
            },
            couldDoWithout: {
                title: 'Could Do Without',
                value: this.couldDoWithout
            },
            essentialForSatisfation: {
                title: 'Essential For Satisfation',
                value: this.essentialForSatisfation
            },
            niceToHave: {
                title: 'Nice To Have',
                value: this.niceToHave
            }
        };
    }
}
