import { LineChart as LCchart, Line, XAxis, YAxis, BarChart, Bar, Tooltip, Legend, } from 'recharts';

const LineChart = () => {
    const subjectMarksData =  [
        {"id": 1, "name": "Alice", "math_score": 85, "physics_score": 75, "chemistry_score": 80},
        {"id": 2, "name": "Bob", "math_score": 78, "physics_score": 70, "chemistry_score": 85},
        {"id": 3, "name": "Charlie", "math_score": 92, "physics_score": 88, "chemistry_score": 90},
        {"id": 4, "name": "David", "math_score": 80, "physics_score": 82, "chemistry_score": 78},
        {"id": 5, "name": "Emma", "math_score": 88, "physics_score": 85, "chemistry_score": 92},
        {"id": 6, "name": "Frank", "math_score": 75, "physics_score": 68, "chemistry_score": 70},
        {"id": 7, "name": "Grace", "math_score": 90, "physics_score": 92, "chemistry_score": 88},
        {"id": 8, "name": "Henry", "math_score": 83, "physics_score": 80, "chemistry_score": 85},
        {"id": 9, "name": "Ivy", "math_score": 79, "physics_score": 75, "chemistry_score": 82},
        {"id": 10, "name": "Jack", "math_score": 87, "physics_score": 90, "chemistry_score": 87}
        ];
      

    return (
        <div className='mt-10'>
           <div>
           <LCchart width={800} height={400} data={subjectMarksData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_score" stroke="red"></Line>
                <Line dataKey="physics_score" stroke="chocolate"></Line>
                <Line dataKey="chemistry_score" stroke="green"></Line>
            </LCchart>
           </div>
           <div>
            <BarChart width={1200} height={500} data={subjectMarksData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={"math_score"}  fill={"#8884d8"}></Bar>
                <Bar dataKey={"physics_score"}  fill={"#82ca9d"}></Bar>
                <Bar dataKey={"chemistry_score"}  fill={"orange"}></Bar>
            </BarChart>
           </div>
        </div>
    );
};

export default LineChart;