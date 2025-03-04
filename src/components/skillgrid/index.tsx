import React from "react"

type Skill = {
    name: string
    level: number
}

export const SkillGrid = () => {
    const skills: Array<Skill> = [
        {
            name: "Android",
            level: 5,
        },
        {
            name: "iOS",
            level: 3,
        },
        {
            name: "AWS",
            level: 3,
        },
        {
            name: "KotlinMP",
            level: 2,
        },
        {
            name: "React",
            level: 4,
        },
        {
            name: "Terraform",
            level: 1,
        },
        {
            name: "NextJS",
            level: 2,
        },
        {
            name: "NodeJS",
            level: 3,
        }
    ]

    return (
        <div className="w-full max-w-xl">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-3">
                {
                    skills.flatMap((skill) => {
                        const items = []
                        items.push(
                            <div key={skill.name} className="flex flex-row justify-end items-center">
                                <div>{skill.name}</div>
                            </div>
                        )
                        for (let i = 1; i <= 5; i++) {
                            items.push(
                                <div key={skill.name + i} className={`rounded ${skill.level >= i ? "bg-white" : "bg-transparent"}`}/>,
                            )
                        }
                        return items
                    })
                }
            </div>
        </div>
    );
}
