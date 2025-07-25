import React from "react"

type Skill = {
    name: string
    level: number
}

const getGrayShade = (index: number) => {
    const lightness = 30 + (index * 7)
    return `hsl(0, 0%, ${lightness}%)`
}

export const SkillGrid = () => {
    const skills: Array<Skill> = [
        {
            name: "Android",
            level: 10,
        },
        {
            name: "iOS",
            level: 5,
        },
        {
            name: "AWS",
            level: 4,
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
            name: "NextJS",
            level: 3,
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
                                <div className={"mr-1"}>{skill.name}</div>
                            </div>
                        )
                        for (let i = 1; i <= 10; i++) {
                            items.push(
                                <div
                                    key={skill.name + i}
                                    className={`rounded h-[20px] sm:h-[25px] aspect-square`}
                                    style={{
                                        backgroundColor: skill.level >= i ? getGrayShade(i) : "transparent",
                                    }}
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
