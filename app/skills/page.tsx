import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
export const revalidate = 60;
export default async function skillsPage() {

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Skills
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of my skills as a Software Engineer.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h2
                                id="featured-post"
                                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                            >
                                Hard Skills
                            </h2>
                            <ul className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                <li>-Proficiency in programming languages such as Go, PHP, Python, or JavaScript.</li>
                                <li>-Strong understanding of data structures and algorithms.</li>
                                <li>-Experience with software development methodologies like Agile or Scrum and familiarity with agile development methodologies like Kanban or Lean.</li>
                                <li>-Knowledge of software testing and debugging techniques, and proficiency in automated testing practices and testing tools.</li>
                                <li>-Familiarity with version control systems like Git.</li>
                                <li>-Competence in database management systems (DBMS) like MySQL or MongoDB.</li>
                                <li>-Proficient in system monitoring like Grafana or Datadog.</li>
                                <li>-Understanding of cloud computing platforms like AWS or Azure.</li>
                                <li>-Knowledge of software architecture and design patterns.</li>
                                <li>-Familiarity with DevOps practices and tools like Docker or Kubernetes.</li>
                                <li>-Knowledge of microservices architecture.</li>
                                <li>-Understanding of software security and secure coding practices.</li>
                                <li>-Experience in continuous integration and continuous delivery (CI/CD).</li>
                                <li>-Performance analysis skills and code optimization.</li>
                                <li>-Knowledge of application programming interfaces (APIs) development with OpenAPI specification.</li>
                                <li>-Experience in software development for cloud environments.</li>
                            </ul>
                        </article>
					</Card>
					<Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h2
                                id="featured-post"
                                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                            >
                                Soft Skills
                            </h2>
                            <ul className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                <li>-Leadership: Ability to inspire and motivate a team, delegate tasks, and guide them towards successful project completion.</li>
                                <li>-Communication: Strong verbal and written communication skills to effectively convey ideas and collaborate with team members and stakeholders.</li>
                                <li>-Problem-solving: Adept at identifying and resolving complex technical issues, thinking critically, and finding innovative solutions.</li>
                                <li>-Adaptability: Willingness to embrace change, learn new technologies, and adapt to evolving project requirements and industry trends.</li>
                                <li>-Collaboration: Ability to work effectively in cross-functional teams, foster a collaborative environment, and encourage knowledge sharing.</li>
                                <li>-Time management: Skill in prioritizing tasks, meeting deadlines, and managing multiple skills simultaneously.</li>
                                <li>-Analytical thinking: Capacity to analyze complex problems, gather and interpret data, and make informed decisions.</li>
                                <li>-Attention to detail: Thoroughness in reviewing code, identifying potential bugs, and ensuring software quality.</li>
                                <li>-Emotional intelligence: Ability to understand and empathize with team members, resolve conflicts, and provide constructive feedback.</li>
                                <li>-Continuous learning: Enthusiasm for staying updated on emerging technologies, industry trends, and best practices in software engineering.</li>
                            </ul>
                        </article>
					</Card>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
			</div>
		</div>
	);
}
