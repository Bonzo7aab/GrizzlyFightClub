import TimeInput from "../components/TimeInput";

export default {
    name: 'activity',
    title: 'Activity',
    type: 'document',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: ['judo', 'karate', 'balet']
            }
        },
        {
            name: 'day',
            title: 'Day',
            type: 'string',
            options: {
                list: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek']
            }
        },
        {
            name: 'start',
            title: 'Start',
            type: 'string',
            inputComponent: TimeInput
        },
        {
            name: 'end',
            title: 'End',
            type: 'string',
            inputComponent: TimeInput
        },
        {
            name: 'school',
            title: 'School',
            type: 'reference',
            to: {type: 'school'}
        }
    ]
  }