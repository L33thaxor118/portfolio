import React from "react"

type Skill = {
    name: string
    level: number
}

export const SkillGrid = () => {
    const skills: Array<Skill> = [
        {
            name: "Android",
            level: 10,
        },
        {
            name: "iOS",
            level: 4,
        },
        {
            name: "AWS",
            level: 3,
        },
        {
            name: "KotlinMP",
            level: 3,
        },
        {
            name: "React",
            level: 6,
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
            level: 4,
        }
    ]

    return (
        <div className="w-auto">
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
                {
                    skills.flatMap((skill) => {
                        const items = []
                        items.push(
                            <div key={skill.name} className="flex flex-row justify-end items-center">
                                <div>{skill.name}</div>
                            </div>
                        )
                        for (let i = 1; i <= 10; i++) {
                            items.push(
                                <div
                                    key={skill.name + i}
                                    className={`rounded h-[20px] sm:h-[25px] aspect-square ${skill.level >= i ? "bg-white" : "bg-transparent"}`}
                                />
                            )
                        }
                        return items
                    })
                }
            </div>
        </div>

    )
}
