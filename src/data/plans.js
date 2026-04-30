export const plans = {
    'weight-gain': {
        title: 'Weight Gain Master Plan',
        tagline: 'Build Pure Size & Strength',
        heroImage: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
        description: 'A scientifically designed hypertrophy program focusing on surplus calories and high-volume training to maximize muscle growth.',
        stats: [
            { label: 'Duration', value: '12 Weeks' },
            { label: 'Focus', value: 'Hypertrophy' },
            { label: 'Difficulty', value: 'Intermediate' },
            { label: 'Weekly Days', value: '5 Days' }
        ],
        weeklySplit: [
            {
                day: 'Day 1',
                focus: 'Upper Body Power',
                duration: '65 min',
                difficulty: 'Hard',
                goal: 'Strength',
                exercises: [
                    {
                        name: 'Barbell Bench Press',
                        muscle: 'Chest, Triceps, Shoulders',
                        sets: '4',
                        reps: '5-8',
                        rest: '120s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Guillotine_Bench_Press/0.jpg',
                        instructions: 'Lie flat on the bench. Lower the barbell to your mid-chest while keeping your elbows at a 45-degree angle. Press the bar back up explosively.',
                        proTip: 'Retract your scapula and maintain a slight arch in your lower back for maximum stability.'
                    },
                    {
                        name: 'Bent Over Barbell Rows',
                        muscle: 'Back, Biceps, Rear Delts',
                        sets: '4',
                        reps: '6-10',
                        rest: '90s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg',
                        instructions: 'Hinge at the hips until your torso is nearly parallel to the floor. Pull the bar to your lower ribs, squeezing your shoulder blades together.',
                        proTip: 'Look slightly forward, not down, to keep your spine neutral.'
                    },
                    {
                        name: 'Standing Overhead Press',
                        muscle: 'Shoulders, Triceps',
                        sets: '3',
                        reps: '8-12',
                        rest: '90s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Bradford_Press/0.jpg',
                        instructions: 'Press the barbell from your upper chest to full lockout overhead. Avoid using your legs to jump the weight up.',
                        proTip: 'Tighten your glutes and core to protect your lower back.'
                    }
                ]
            },
            {
                day: 'Day 2',
                focus: 'Lower Body Power',
                duration: '70 min',
                difficulty: 'Hard',
                goal: 'Mass',
                exercises: [
                    {
                        name: 'High Bar Back Squat',
                        muscle: 'Quads, Glutes, Lower Back',
                        sets: '4',
                        reps: '5-8',
                        rest: '150s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single-Leg_High_Box_Squat/0.jpg',
                        instructions: 'Descend until your thighs are parallel to the floor. Drive through your mid-foot to return to the starting position.',
                        proTip: 'Take a deep breath and brace your core before descending.'
                    },
                    {
                        name: 'Conventional Deadlift',
                        muscle: 'Hamstrings, Glutes, Back',
                        sets: '3',
                        reps: '3-5',
                        rest: '180s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Axle_Deadlift/0.jpg',
                        instructions: 'Pull the bar in a straight vertical line. Keep the bar close to your shins throughout the lift.',
                        proTip: 'Think "push the floor away" rather than "pull the bar up".'
                    }
                ]
            },
            { day: 'Day 3', focus: 'Rest & Recovery', exercises: [] },
            {
                day: 'Day 4',
                focus: 'Back & Shoulders',
                duration: '60 min',
                difficulty: 'Intermediate',
                goal: 'Hypertrophy',
                exercises: [
                    {
                        name: 'Weighted Pull Ups',
                        muscle: 'Lats, Biceps',
                        sets: '3',
                        reps: 'AMRAP',
                        rest: '90s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Pull_Ups/0.jpg',
                        instructions: 'Pull yourself up until your chin is over the bar. Focus on using your lats rather than your arms.',
                        proTip: 'Pause for a second at the top for maximum contraction.'
                    }
                ]
            },
            {
                day: 'Day 5',
                focus: 'Chest & Arms',
                duration: '60 min',
                difficulty: 'Intermediate',
                goal: 'Hypertrophy',
                exercises: [
                    {
                        name: 'Incline Dumbbell Press',
                        muscle: 'Upper Chest',
                        sets: '4',
                        reps: '10-12',
                        rest: '90s',
                        image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',
                        instructions: 'Press dumbbells at a 30-45 degree incline. Keep a controlled tempo on the way down.',
                        proTip: 'Don\'t click the dumbbells at the top; keep tension on the chest.'
                    }
                ]
            },
            { day: 'Day 6', focus: 'Legs Hypertrophy', exercises: [] },
            { day: 'Day 7', focus: 'Rest', exercises: [] }
        ],
        diet: [
            { type: 'Breakfast', name: 'Oatmeal with Peanut Butter & Whey', calories: '600 kcal' },
            { type: 'Lunch', name: 'Chicken Breast, Rice & Broccoli', calories: '750 kcal' },
            { type: 'Snack', name: 'Greek Yogurt & Almonds', calories: '350 kcal' },
            { type: 'Dinner', name: 'Steak & Sweet Potato', calories: '800 kcal' },
            { type: 'Pre-Bed', name: 'Casein Protein Shake', calories: '200 kcal' }
        ],
        timeline: [
            { week: 'Week 1-4', focus: 'Foundation & Form' },
            { week: 'Week 5-8', focus: 'Progressive Overload' },
            { week: 'Week 9-12', focus: 'Max Effort & PRs' }
        ],
        muscleWorkouts: {
            'Chest': [
                { name: 'Barbell Bench Press', type: 'Compound', sets: '4', reps: '6-8', rest: '120s', instructions: 'Lower bar to mid-chest, drive up explosively.', safetyTip: 'Keep your shoulder blades retracted.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Guillotine_Bench_Press/0.jpg' },
                { name: 'Incline Dumbbell Press', type: 'Compound', sets: '3', reps: '10-12', rest: '90s', instructions: 'Press at 30-45 degree incline for upper chest hit.', safetyTip: 'Avoid over-extending the elbows.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg' },
                { name: 'Weighted Dips', type: 'Compound', sets: '3', reps: '8-10', rest: '90s', instructions: 'Lean forward to target chest more than triceps.', safetyTip: 'Do not go below shoulder level.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Bench_Dip/0.jpg' },
                { name: 'Cable Flyes', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Focus on the stretch and squeeze at the center.', safetyTip: 'Maintain a slight bend in your elbows.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg' },
                { name: 'Push-Ups (To Failure)', type: 'Finisher', sets: '3', reps: 'AMRAP', rest: '60s', instructions: 'Maintain a straight line from head to heels.', safetyTip: 'Keep core engaged to protect lower back.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg' }
            ],
            'Back': [
                { name: 'Deadlift', type: 'Compound', sets: '3', reps: '5', rest: '180s', instructions: 'Keep bar close to body, drive with legs.', safetyTip: 'Do not round your lower back.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Axle_Deadlift/0.jpg' },
                { name: 'Pull-Ups', type: 'Compound', sets: '3', reps: '8-12', rest: '90s', instructions: 'Pull chin over bar, focus on lats.', safetyTip: 'Avoid using excessive momentum.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg' },
                { name: 'Barbell Rows', type: 'Compound', sets: '4', reps: '8-10', rest: '90s', instructions: 'Hinge at hips, pull bar to belly button.', safetyTip: 'Keep your spine neutral throughout.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg' },
                { name: 'Lat Pulldowns', type: 'Isolation', sets: '3', reps: '10-12', rest: '60s', instructions: 'Pull bar to upper chest, squeeze lats.', safetyTip: 'Do not pull the bar behind your neck.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Lat/0.jpg' },
                { name: 'Face Pulls', type: 'Finisher', sets: '3', reps: '15-20', rest: '60s', instructions: 'Pull rope towards your forehead, pull ends apart.', safetyTip: 'Focus on external rotation of shoulders.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg' }
            ],
            'Shoulders': [
                { name: 'Overhead Press', type: 'Compound', sets: '4', reps: '6-8', rest: '120s', instructions: 'Press barbell from upper chest to lockout.', safetyTip: 'Don\'t arch your lower back.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg' },
                { name: 'Arnold Press', type: 'Compound', sets: '3', reps: '10-12', rest: '90s', instructions: 'Rotate palms as you press the dumbbells.', safetyTip: 'Sit against a bench for better support.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg' },
                { name: 'Lateral Raises', type: 'Isolation', sets: '4', reps: '12-15', rest: '60s', instructions: 'Raise dumbbells to shoulder height, pinkies up.', safetyTip: 'Do not use your body weight to swing.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg' },
                { name: 'Front Raises', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Raise weights in front of you to eye level.', safetyTip: 'Keep a slight bend in the knees.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg' },
                { name: 'Upright Rows', type: 'Finisher', sets: '3', reps: '12-15', rest: '60s', instructions: 'Pull bar towards chin, elbows lead movement.', safetyTip: 'Stop if you feel any shoulder impingement.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/0.jpg' }
            ],
            'Arms': [
                { name: 'Barbell Curls', type: 'Compound', sets: '4', reps: '8-10', rest: '90s', instructions: 'Full range of motion, squeeze biceps at top.', safetyTip: 'Avoid swinging your torso.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Preacher_Curls/0.jpg' },
                { name: 'Skull Crushers', type: 'Compound', sets: '4', reps: '10-12', rest: '90s', instructions: 'Lower bar towards forehead, extend fully.', safetyTip: 'Keep your elbows tucked in.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg' },
                { name: 'Hammer Curls', type: 'Isolation', sets: '3', reps: '10-12', rest: '60s', instructions: 'Neutral grip, targets brachialis and forearm.', safetyTip: 'Slow, controlled eccentric (lowering) phase.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg' },
                { name: 'Tricep Pushdowns', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Push cable bar down until arms are straight.', safetyTip: 'Keep your upper arms pinned to your sides.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown/0.jpg' },
                { name: 'Concentration Curls', type: 'Finisher', sets: '3', reps: '15', rest: '45s', instructions: 'Isolate each bicep against your inner thigh.', safetyTip: 'Do not bounce the weight.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg' }
            ],
            'Legs': [
                { name: 'Back Squats', type: 'Compound', sets: '4', reps: '6-8', rest: '150s', instructions: 'Squat deep, drive through your heels.', safetyTip: 'Keep your chest up and core tight.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elbows_Back/0.jpg' },
                { name: 'Leg Press', type: 'Compound', sets: '3', reps: '12-15', rest: '120s', instructions: 'Push platform until legs are almost straight.', safetyTip: 'Never lock your knees at the top.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg' },
                { name: 'Leg Extensions', type: 'Isolation', sets: '3', reps: '15-20', rest: '60s', instructions: 'Kick out and hold for a second at the top.', safetyTip: 'Keep your back flat against the seat.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg' },
                { name: 'Hamstring Curls', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Curl weight towards your glutes.', safetyTip: 'Control the weight on the way down.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg_Curls/0.jpg' },
                { name: 'Calf Raises', type: 'Finisher', sets: '4', reps: '15-20', rest: '60s', instructions: 'Go for full stretch and high peak contraction.', safetyTip: 'Maintain balance on the platform.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg' }
            ],
            'Core': [
                { name: 'Plank', type: 'Compound', sets: '3', reps: '60s', rest: '60s', instructions: 'Keep body in a straight line from head to heels.', safetyTip: 'Don\'t let your hips sag.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg' },
                { name: 'Hanging Leg Raises', type: 'Compound', sets: '3', reps: '12-15', rest: '60s', instructions: 'Raise legs to 90 degrees without swinging.', safetyTip: 'Exhale as you raise your legs.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg' },
                { name: 'Russian Twists', type: 'Isolation', sets: '3', reps: '20 per side', rest: '45s', instructions: 'Rotate torso while holding a weight.', safetyTip: 'Keep your feet off the ground for more intensity.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg' },
                { name: 'Cable Crunches', type: 'Isolation', sets: '3', reps: '15-20', rest: '60s', instructions: 'Crunch down using your abs, not your arms.', safetyTip: 'Don\'t pull with your neck.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg' },
                { name: 'Bicycle Crunches', type: 'Finisher', sets: '3', reps: '50', rest: '45s', instructions: 'Opposite elbow to opposite knee rapidly.', safetyTip: 'Focus on quality rotations.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg' }
            ]
        }
    },
    'fat-loss': {
        title: 'Shred & Burn Protocol',
        tagline: 'Reveal Your True Physique',
        heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
        description: 'High-intensity interval training paired with a caloric deficit to melt fat while preserving lean muscle mass.',
        stats: [
            { label: 'Duration', value: '8 Weeks' },
            { label: 'Focus', value: 'Fat Loss' },
            { label: 'Difficulty', value: 'Hard' },
            { label: 'Weekly Days', value: '6 Days' }
        ],
        diet: [
            { type: 'Breakfast', name: 'Egg White Omelet & Spinach', calories: '300 kcal' },
            { type: 'Lunch', name: 'Grilled Fish & Asparagus', calories: '400 kcal' },
            { type: 'Snack', name: 'Apple & Walnuts', calories: '150 kcal' },
            { type: 'Dinner', name: 'Chicken Salad (No Dressing)', calories: '350 kcal' }
        ],
        timeline: [
            { week: 'Week 1-2', focus: 'Metabolic Adaptation' },
            { week: 'Week 3-6', focus: 'Fat Oxidation' },
            { week: 'Week 7-8', focus: 'Final Cut' }
        ],
        muscleWorkouts: {
            'Chest': [
                { name: 'Dumbbell Bench Press', type: 'Compound', sets: '4', reps: '12-15', rest: '45s', instructions: 'High intensity reps with low rest.', safetyTip: 'Control the weight at all times.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg' },
                { name: 'Push-Ups', type: 'Compound', sets: '3', reps: '20', rest: '45s', instructions: 'Fast-paced, high volume.', safetyTip: 'Keep your elbows tucked in.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg' },
                { name: 'Incline Dumbbell Flyes', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Stretch the chest, feel the burn.', safetyTip: 'Maintain a slight bend in the elbows.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Flyes/0.jpg' },
                { name: 'Cable Crossovers', type: 'Isolation', sets: '3', reps: '20', rest: '30s', instructions: 'High volume for maximum fat burn.', safetyTip: 'Focus on muscle contraction.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Crossover/0.jpg' },
                { name: 'Burpees', type: 'Finisher', sets: '3', reps: '15', rest: '30s', instructions: 'Full body metabolic finisher.', safetyTip: 'Land softly on your feet.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Burpees' }
            ],
            'Back': [
                { name: 'Bent Over Rows', type: 'Compound', sets: '4', reps: '12-15', rest: '45s', instructions: 'Maintain intensity with rapid reps.', safetyTip: 'Do not round your lower back.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg' },
                { name: 'Lat Pulldowns', type: 'Compound', sets: '4', reps: '15', rest: '45s', instructions: 'Pull to chest, high tempo.', safetyTip: 'Don\'t use momentum.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Overhead_Lat/0.jpg' },
                { name: 'Seated Cable Rows', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Squeeze shoulder blades together.', safetyTip: 'Sit upright, don\'t lean back.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Rows/0.jpg' },
                { name: 'Back Extensions', type: 'Isolation', sets: '3', reps: '20', rest: '30s', instructions: 'Strengthen the lower back.', safetyTip: 'Do not hyperextend at the top.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hyperextensions_Back_Extensions/0.jpg' },
                { name: 'Kettlebell Swings', type: 'Finisher', sets: '4', reps: '25', rest: '45s', instructions: 'Explosive hip hinge movement.', safetyTip: 'Swing with hips, not arms.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Kettlebell_Swings/0.jpg' }
            ],
            'Shoulders': [
                { name: 'Dumbbell Shoulder Press', type: 'Compound', sets: '4', reps: '12-15', rest: '45s', instructions: 'Press weights overhead.', safetyTip: 'Keep core engaged.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg' },
                { name: 'Lateral Raises', type: 'Isolation', sets: '4', reps: '20', rest: '30s', instructions: 'Light weights, high reps.', safetyTip: 'Keep arms slightly bent.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg' },
                { name: 'Front Raises', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Controlled raises to eye level.', safetyTip: 'Avoid rocking your body.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg' },
                { name: 'Rear Delt Flyes', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Target the back of the shoulders.', safetyTip: 'Hinge forward at the hips.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rear_Delt_Row/0.jpg' },
                { name: 'Mountain Climbers', type: 'Finisher', sets: '3', reps: '45s', rest: '30s', instructions: 'High intensity cardio for shoulders.', safetyTip: 'Keep your hands under your shoulders.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg' }
            ],
            'Arms': [
                { name: 'Dumbbell Curls', type: 'Compound', sets: '4', reps: '15', rest: '45s', instructions: 'High volume curls.', safetyTip: 'No swinging.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flexor_Incline_Dumbbell_Curls/0.jpg' },
                { name: 'Tricep Extensions', type: 'Compound', sets: '4', reps: '15', rest: '45s', instructions: 'Extend overhead with dumbbell.', safetyTip: 'Keep elbows near ears.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg' },
                { name: 'Hammer Curls', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Neutral grip for forearms.', safetyTip: 'Control the descent.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg' },
                { name: 'Bench Dips', type: 'Isolation', sets: '3', reps: '20', rest: '30s', instructions: 'Use a bench to work triceps.', safetyTip: 'Keep back close to the bench.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg' },
                { name: 'Battle Ropes', type: 'Finisher', sets: '3', reps: '30s', rest: '30s', instructions: 'High intensity arm burnout.', safetyTip: 'Keep a base with slightly bent knees.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Battling_Ropes/0.jpg' }
            ],
            'Legs': [
                { name: 'Goblet Squats', type: 'Compound', sets: '4', reps: '15-20', rest: '45s', instructions: 'Hold weight at chest, squat deep.', safetyTip: 'Keep your elbows inside your knees.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Goblet_Squat/0.jpg' },
                { name: 'Walking Lunges', type: 'Compound', sets: '3', reps: '24 strides', rest: '45s', instructions: 'Keep moving, stay low.', safetyTip: 'Don\'t let knee touch floor too hard.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunges/0.jpg' },
                { name: 'Leg Press', type: 'Isolation', sets: '3', reps: '20', rest: '45s', instructions: 'High reps for maximum burn.', safetyTip: 'Focus on quad contraction.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg' },
                { name: 'Glute Bridges', type: 'Isolation', sets: '3', reps: '25', rest: '30s', instructions: 'Squeeze glutes at the top.', safetyTip: 'Keep feet flat on floor.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Glute_Kickback/0.jpg' },
                { name: 'Box Jumps', type: 'Finisher', sets: '3', reps: '15', rest: '45s', instructions: 'Explosive jumps for fat burn.', safetyTip: 'Land softly on the box.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Skip/0.jpg' }
            ],
            'Core': [
                { name: 'Bicycle Crunches', type: 'Compound', sets: '3', reps: '50', rest: '30s', instructions: 'Rapid rotations.', safetyTip: 'Touch elbow to knee.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg' },
                { name: 'Plank Jack', type: 'Compound', sets: '3', reps: '45s', rest: '30s', instructions: 'Jump feet in and out in plank.', safetyTip: 'Keep your core braced.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg' },
                { name: 'Leg Raises', type: 'Isolation', sets: '3', reps: '20', rest: '30s', instructions: 'Raise legs until vertical.', safetyTip: 'Keep lower back pressed down.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Leg_Raises/0.jpg' },
                { name: 'V-Ups', type: 'Isolation', sets: '3', reps: '15', rest: '30s', instructions: 'Fold body into a V shape.', safetyTip: 'Control the lowering phase.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Jackknife_Sit-Up/0.jpg' },
                { name: 'Flutter Kicks', type: 'Finisher', sets: '3', reps: '60s', rest: '30s', instructions: 'Rapid, small leg movements.', safetyTip: 'Keep your hands under your glutes.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flutter_Kicks/0.jpg' }
            ]
        }
    },
    'lean-cut': {
        title: 'Lean Athlete Aesthetic',
        tagline: 'Sculpt & Define',
        heroImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
        description: 'A hybrid approach combining strength training and cardio to achieve a toned, athletic look.',
        stats: [
            { label: 'Duration', value: '10 Weeks' },
            { label: 'Focus', value: 'Definition' },
            { label: 'Difficulty', value: 'Moderate' },
            { label: 'Weekly Days', value: '5 Days' }
        ],
        timeline: [
            { week: 'Week 1-4', focus: 'Movement Patterns' },
            { week: 'Week 5-10', focus: 'Speed & Agility' }
        ],
        muscleWorkouts: {
            'Chest': [
                { name: 'Incline Barbell Press', type: 'Compound', sets: '4', reps: '8-10', rest: '90s', instructions: 'Focus on upper chest development.', safetyTip: 'Don\'t bounce the bar off your chest.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg' },
                { name: 'Flat Dumbbell Press', type: 'Compound', sets: '3', reps: '10-12', rest: '75s', instructions: 'Wide range of motion for chest activation.', safetyTip: 'Keep your elbows at 45 degrees.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg' },
                { name: 'Decline Push-Ups', type: 'Compound', sets: '3', reps: '15-20', rest: '60s', instructions: 'Feet elevated to target lower chest/shoulders.', safetyTip: 'Keep core tight, don\'t sag.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg' },
                { name: 'Cable Chest Press', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Constant tension throughout the movement.', safetyTip: 'Maintain a stable athletic stance.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/0.jpg' },
                { name: 'Diamond Push-Ups', type: 'Finisher', sets: '3', reps: 'AMRAP', rest: '45s', instructions: 'Hands together in diamond shape.', safetyTip: 'Focus on tricep and inner chest squeeze.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg' }
            ],
            'Back': [
                { name: 'Weighted Pull-Ups', type: 'Compound', sets: '3', reps: '6-8', rest: '120s', instructions: 'Add weight for progressive overload.', safetyTip: 'Full extension at the bottom.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg' },
                { name: 'Single Arm Dumbbell Rows', type: 'Compound', sets: '3', reps: '10-12', rest: '60s', instructions: 'Pull weight to hip, minimize torso rotation.', safetyTip: 'Keep your back flat.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Single_Dumbbell_Raise/0.jpg' },
                { name: 'T-Bar Rows', type: 'Compound', sets: '3', reps: '8-10', rest: '90s', instructions: 'Powerful rowing movement for thickness.', safetyTip: 'Use your lats to pull, not your lower back.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=T-Bar+Rows' },
                { name: 'Straight Arm Pulldowns', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Isolate the lats with straight arms.', safetyTip: 'Maintain a slight hinge at the hips.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Straight+Arm+Pulldowns' },
                { name: 'Superman Extensions', type: 'Finisher', sets: '3', reps: '20', rest: '30s', instructions: 'Lift chest and legs off floor simultaneously.', safetyTip: 'Hold the contraction at the top.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Superman/0.jpg' }
            ],
            'Shoulders': [
                { name: 'Seated Barbell Press', type: 'Compound', sets: '4', reps: '8-10', rest: '90s', instructions: 'Press bar from chin to lockout.', safetyTip: 'Don\'t let your back arch off the seat.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Barbell_Military_Press/0.jpg' },
                { name: 'Dumbbell Lateral Raises', type: 'Isolation', sets: '4', reps: '15', rest: '45s', instructions: 'Raise to shoulder level, slow descent.', safetyTip: 'Lead with your elbows.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lying_Rear_Lateral_Raise/0.jpg' },
                { name: 'Upright Rows (Cable)', type: 'Compound', sets: '3', reps: '12-15', rest: '60s', instructions: 'Pull cable to mid-chest, elbows high.', safetyTip: 'Keep the bar close to your body.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Elevated_Cable_Rows/0.jpg' },
                { name: 'Face Pulls', type: 'Isolation', sets: '3', reps: '15-20', rest: '60s', instructions: 'External rotation for shoulder health.', safetyTip: 'Pull towards your eyes.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg' },
                { name: 'Shadow Boxing', type: 'Finisher', sets: '3', reps: '2 min', rest: '45s', instructions: 'Light weights, fast punches for endurance.', safetyTip: 'Snap the punches, don\'t overextend.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Shadow+Boxing' }
            ],
            'Arms': [
                { name: 'EZ Bar Curls', type: 'Compound', sets: '3', reps: '10-12', rest: '60s', instructions: 'Better wrist position for heavy curls.', safetyTip: 'Keep your elbows glued to your sides.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_EZ_Bar_Curl/0.jpg' },
                { name: 'Dips', type: 'Compound', sets: '3', reps: 'AMRAP', rest: '60s', instructions: 'Keep torso upright for tricep focus.', safetyTip: 'Stop at 90 degree elbow bend.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg' },
                { name: 'Incline Dumbbell Curls', type: 'Isolation', sets: '3', reps: '12', rest: '60s', instructions: 'Maximum stretch on the long head.', safetyTip: 'Lower the weights slowly.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flexor_Incline_Dumbbell_Curls/0.jpg' },
                { name: 'Overhead Tricep Extension', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Extend dumbbell overhead with both hands.', safetyTip: 'Keep your core braced.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Dumbbell_Tricep_Extension/0.jpg' },
                { name: 'Wrist Curls', type: 'Finisher', sets: '3', reps: '20', rest: '30s', instructions: 'Target forearms for complete athlete look.', safetyTip: 'Use a light weight, high reps.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg' }
            ],
            'Legs': [
                { name: 'Front Squats', type: 'Compound', sets: '4', reps: '8-10', rest: '120s', instructions: 'Bar on front delts, upright torso.', safetyTip: 'Maintain a strong shelf with your shoulders.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Squats_With_Two_Kettlebells/0.jpg' },
                { name: 'Romanian Deadlifts', type: 'Compound', sets: '3', reps: '10-12', rest: '90s', instructions: 'Hinge back, feel the hamstring stretch.', safetyTip: 'Shin-close bar path.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Deadlifts/0.jpg' },
                { name: 'Step-Ups', type: 'Compound', sets: '3', reps: '12 per leg', rest: '60s', instructions: 'Drive through the lead leg on a platform.', safetyTip: 'Control the step down.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Step-up_with_Knee_Raise/0.jpg' },
                { name: 'Bulgarian Split Squats', type: 'Isolation', sets: '3', reps: '10', rest: '60s', instructions: 'Rear foot elevated, deep lunge.', safetyTip: 'Maintain balance, don\'t lean too forward.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squats/0.jpg' },
                { name: 'Jump Squats', type: 'Finisher', sets: '3', reps: '20', rest: '45s', instructions: 'Explosive vertical jumps from squat.', safetyTip: 'Land soft through the balls of feet.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Jump/0.jpg' }
            ],
            'Core': [
                { name: 'L-Sits', type: 'Compound', sets: '3', reps: 'Hold 20s', rest: '45s', instructions: 'Sit on floor, lift legs and butt up.', safetyTip: 'Lock your elbows.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=L-Sits' },
                { name: 'Hanging Knee Raises', type: 'Compound', sets: '3', reps: '15', rest: '45s', instructions: 'Bring knees to chest while hanging.', safetyTip: 'Minimize swinging.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Hanging+Knee+Raises' },
                { name: 'Ab Roller', type: 'Isolation', sets: '3', reps: '12', rest: '60s', instructions: 'Roll out and back using your abs.', safetyTip: 'Don\'t let your back arch.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Roller/0.jpg' },
                { name: 'Dead Bug', type: 'Isolation', sets: '3', reps: '20', rest: '45s', instructions: 'Opposite arm and leg movements on back.', safetyTip: 'Keep lower back on the floor.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dead_Bug/0.jpg' },
                { name: 'Plank with Shoulder Taps', type: 'Finisher', sets: '3', reps: '30 taps', rest: '30s', instructions: 'Maintain plank, tap opposite shoulders.', safetyTip: 'Keep your hips level.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Shoulder_Press_-_With_Bands/0.jpg' }
            ]
        }
    },
    'muscle-build': {
        title: 'Classic Bodybuilding',
        tagline: 'Symmetry & Size',
        heroImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
        description: 'Traditional bodybuilding split focusing on isolation and compound movements for maximum symmetry.',
        stats: [
            { label: 'Duration', value: '16 Weeks' },
            { label: 'Focus', value: 'Aesthetics' },
            { label: 'Difficulty', value: 'Advanced' },
            { label: 'Weekly Days', value: '6 Days' }
        ],
        diet: [
            { type: 'Mass Breakfast', name: 'Steaks & Eggs', calories: '800 kcal' },
            { type: 'Growth Lunch', name: 'Beef Mince & Brown Rice', calories: '900 kcal' },
            { type: 'Recovery Dinner', name: 'Salmon & Large Sweet Potato', calories: '850 kcal' }
        ],
        timeline: [
            { week: 'Week 1-8', focus: 'Hypertrophy Focus' },
            { week: 'Week 9-16', focus: 'Detail & Definition' }
        ],
        muscleWorkouts: {
            'Chest': [
                { name: 'Bench Press', type: 'Compound', sets: '5', reps: '5', rest: '150s', instructions: 'Heavy compound movement for power.', safetyTip: 'Use a spotter for heavy sets.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Press_-_Powerlifting/0.jpg' },
                { name: 'Incline Bench Press', type: 'Compound', sets: '4', reps: '8-10', rest: '120s', instructions: 'Focus on upper pectoral fibers.', safetyTip: 'Maintain a 30-degree incline.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Smith_Machine_Incline_Bench_Press/0.jpg' },
                { name: 'Chest Dips', type: 'Compound', sets: '3', reps: '10-12', rest: '90s', instructions: 'Weighted for hypertrophy.', safetyTip: 'Keep your elbows flared.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/0.jpg' },
                { name: 'Pec Deck Flyes', type: 'Isolation', sets: '4', reps: '12-15', rest: '60s', instructions: 'Continuous tension on chest.', safetyTip: 'Don\'t let the weight pull shoulders back too far.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Pec+Deck+Flyes' },
                { name: 'Low Cable Flyes', type: 'Finisher', sets: '3', reps: '15', rest: '60s', instructions: 'Pull from bottom to target upper chest.', safetyTip: 'Squeeze hard at the top.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Low_Cable_Crossover/0.jpg' }
            ],
            'Back': [
                { name: 'Rack Pulls', type: 'Compound', sets: '3', reps: '5-8', rest: '150s', instructions: 'Heavy pulls from knee height.', safetyTip: 'Keep your chest up.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Rack_Pulls/0.jpg' },
                { name: 'Bent Over Rows', type: 'Compound', sets: '4', reps: '8-10', rest: '120s', instructions: 'Traditional row for back density.', safetyTip: 'Pull with your elbows.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Barbell_Row/0.jpg' },
                { name: 'Wide Grip Lat Pulldowns', type: 'Compound', sets: '4', reps: '10-12', rest: '90s', instructions: 'Build width in your lats.', safetyTip: 'Drive your elbows down.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg' },
                { name: 'Seated Rows', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Squeeze for mid-back thickness.', safetyTip: 'Don\'t rock your torso.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Rows/0.jpg' },
                { name: 'One Arm Lat Pulldowns', type: 'Finisher', sets: '3', reps: '15 per arm', rest: '45s', instructions: 'Unilateral work for symmetry.', safetyTip: 'Focus on the lateral stretch.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One_Arm_Lat_Pulldown/0.jpg' }
            ],
            'Shoulders': [
                { name: 'Military Press', type: 'Compound', sets: '4', reps: '6-8', rest: '120s', instructions: 'Standing press for overall growth.', safetyTip: 'Brace your core.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Military_Press/0.jpg' },
                { name: 'Upright Rows', type: 'Compound', sets: '3', reps: '10-12', rest: '90s', instructions: 'Target traps and side delts.', safetyTip: 'Pull to chest, not chin.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Upright_Barbell_Row/0.jpg' },
                { name: 'Heavy Lateral Raises', type: 'Isolation', sets: '4', reps: '10-12', rest: '60s', instructions: 'Focus on side delt cap.', safetyTip: 'Slight cheat is okay on last reps.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg' },
                { name: 'Rear Delt Flyes (Machine)', type: 'Isolation', sets: '3', reps: '15', rest: '60s', instructions: 'Isolate the rear deltoid.', safetyTip: 'Don\'t use your back muscles to pull.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Machine_Flyes/0.jpg' },
                { name: 'Dumbbell Shrugs', type: 'Finisher', sets: '4', reps: '15-20', rest: '60s', instructions: 'Target upper traps.', safetyTip: 'Don\'t roll your shoulders.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Shrugs/0.jpg' }
            ],
            'Arms': [
                { name: 'Barbell Curls', type: 'Compound', sets: '4', reps: '8-10', rest: '90s', instructions: 'The classic mass builder.', safetyTip: 'Control the weight.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Reverse_Barbell_Preacher_Curls/0.jpg' },
                { name: 'Close Grip Bench Press', type: 'Compound', sets: '4', reps: '8-10', rest: '120s', instructions: 'Heavy tricep builder.', safetyTip: 'Keep elbows tucked.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg' },
                { name: 'Preacher Curls', type: 'Isolation', sets: '3', reps: '12', rest: '60s', instructions: 'Isolate biceps, no cheating.', safetyTip: 'Full extension, be careful of biceps tears.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Machine_Preacher_Curls/0.jpg' },
                { name: 'Tricep Pushdowns (Rope)', type: 'Isolation', sets: '3', reps: '12-15', rest: '60s', instructions: 'Spread rope at bottom for tricep peak.', safetyTip: 'Keep wrists strong.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Triceps_Pushdown_-_Rope_Attachment/0.jpg' },
                { name: 'Hammer Curls', type: 'Finisher', sets: '3', reps: '15', rest: '45s', instructions: 'Build thickness in biceps and forearms.', safetyTip: 'Maintain a neutral grip.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg' }
            ],
            'Legs': [
                { name: 'Squats', type: 'Compound', sets: '5', reps: '5-8', rest: '180s', instructions: 'King of leg exercises.', safetyTip: 'Drive through your mid-foot.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg' },
                { name: 'Leg Press', type: 'Compound', sets: '4', reps: '12-15', rest: '120s', instructions: 'High volume for mass.', safetyTip: 'Feet high for more glute/hamstring.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg' },
                { name: 'Hack Squats', type: 'Compound', sets: '3', reps: '10-12', rest: '120s', instructions: 'Quad isolation in a machine.', safetyTip: 'Keep your back flat.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Narrow_Stance_Hack_Squats/0.jpg' },
                { name: 'Stiff Leg Deadlifts', type: 'Isolation', sets: '3', reps: '12-15', rest: '90s', instructions: 'Target the hamstrings.', safetyTip: 'Keep a slight bend in the knees.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Stiff_Leg_Barbell_Good_Morning/0.jpg' },
                { name: 'Seated Calf Raises', type: 'Finisher', sets: '5', reps: '15-20', rest: '45s', instructions: 'Isolate the soleus.', safetyTip: 'Full stretch at the bottom.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Donkey_Calf_Raises/0.jpg' }
            ],
            'Core': [
                { name: 'Weighted Crunches', type: 'Compound', sets: '3', reps: '15-20', rest: '60s', instructions: 'Add weight for progressive ab thickness.', safetyTip: 'Exhale at the top.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Weighted_Crunches/0.jpg' },
                { name: 'Toes to Bar', type: 'Compound', sets: '3', reps: '10-12', rest: '60s', instructions: 'Advanced core movement.', safetyTip: 'Don\'t swing to the top.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Toes+to+Bar' },
                { name: 'Plank with Weight', type: 'Isolation', sets: '3', reps: '45-60s', rest: '60s', instructions: 'Add a plate to your back for stability.', safetyTip: 'Keep your hips in line.', image: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg' },
                { name: 'Woodchoppers', type: 'Isolation', sets: '3', reps: '15 per side', rest: '45s', instructions: 'Rotation work for obliques.', safetyTip: 'Follow the weight with your eyes.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Woodchoppers' },
                { name: 'Dragon Flags', type: 'Finisher', sets: '3', reps: '8-10', rest: '60s', instructions: 'Extremely advanced core isolation.', safetyTip: 'Only proceed if you have the strength.', image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Dragon+Flags' }
            ]
        }
    }
};
