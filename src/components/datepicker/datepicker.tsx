import * as React from "react";

import { Box, Grid, BoxListItem, Heading3, Heading5 } from "../../core";

import { monthNames, dayNames, daysInMonth, leapYears } from "./models";

import Day from "./day";

interface IDatePickerProps {
}

interface IDatePickerState {
    selectedDay: IDay;
    days: IDay[];
}

interface IDay {
    date: number;    
    isToday?: boolean;
    subtle?: boolean;
}

const DayLayout = Grid.withComponent("ul").extend`
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 1fr;
    grid-row-gap: 0.5rem;
`;

const DayHeader = BoxListItem.extend`
    text-transform: uppercase;
    font-weight: 500;
    pointer-events: none;
`;

class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
    private _currentDate = new Date();

    constructor(props: IDatePickerProps) {
        super(props);

        const today = this._currentDate.getDate();
        this.state = this.getState(this._currentDate.getMonth(), this._currentDate.getFullYear(), today, today);
    }

    render() {
        const { days, selectedDay } = this.state;

        const dayHeaders = dayNames.map((d, i) => (
            <DayHeader key={i} color="grayscale.4">{d}</DayHeader>
        ));

        const dayButtons = days.map((d, i) => (
            <BoxListItem key={i}>
                <Day isSelected={false} hasItems={false} {...d}>{d.date}</Day>
            </BoxListItem>
        ));

        return (
            <Box flexDirection="column" fullWidth align="flex-start">
                <Heading3 color="grayscale.4">Today</Heading3>
                <Heading5 color="accent" mb="3rem">{this._currentDate.toDateString()}</Heading5>
                
                <Box>
                    
                </Box>

                <DayLayout fullWidth flexDirection="row">
                    {dayHeaders}
                    {dayButtons}
                </DayLayout>
            </Box>
        )
    }

    private getState = (month: number, year: number, selectedDate: number, today: number): IDatePickerState => {
        let total = 43;
    
        const days: IDay[] = [];
        let selectedDay: any;

        const firstDay: number = new Date(year, month, 1).getDay();
        const totalDays: number = new Date(year, month + 1, 0).getDate();
        const totalPrevious: number = new Date(year, month, 0).getDate();
    
        // Once we figure out what day is first, we can just backfill from the previous month.
        if (firstDay > 0) {
            for (let i = firstDay; i > 0; i--) {
                days.push({ date: totalPrevious - i, subtle: true });
                total--;
            }
        }
      
        for (let i = 1; i <= totalDays; i++) {
            const d = { date: i, isToday: i === today };
            days.push(d);
            total--;

            if (selectedDate === i) {
                selectedDay = d;
            }
        }
      
        for (let i = 1; i < total; i++) {
            days.push({ date: i, subtle: true });
        }

        if (!selectedDay) {
            throw "Selected Day not found?";
        }
    
        return {
            days,
            selectedDay
        };
    };
}

export default DatePicker;