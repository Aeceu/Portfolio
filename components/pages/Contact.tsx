"use client";
import DelayOnReveal from "../animate/DelayReveal";
import Divider from "../animate/divider";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		setLoading(true);
		try {
			const response = await axios.post("/api/email", formData);
			alert(response.data.message);
		} catch (error) {
			alert("Error sending email");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			id="contact-page"
			className="relative min-h-[700px] flex flex-col items-center p-4 gap-8">
			<div className="w-full flex items-center">
				<DelayOnReveal
					delay={0.2}
					className="relative pr-4 flex text-5xl md:text-7xl lg:text-8xl font-extrabold text-emerald-500 mb-4 z-50
          bg-white dark:bg-slate-950
          dark:[text-shadow:3px_3px_0_rgb(255_255_255_)] [text-shadow:3px_3px_0_rgb(2_6_23_)]
          lg:dark:[text-shadow:5px_5px_0_rgb(255_255_255_)] lg:[text-shadow:5px_5px_0_rgb(2_6_23_)]">
					Contact Me
				</DelayOnReveal>
				<Divider />
			</div>

			<div className="w-full h-full flex items-center justify-center">
				<form
					onSubmit={handleSubmit}
					className="min-w-[300px] w-[500px] h-full flex flex-col items-start gap-6 p-2">
					<h1
						className="text-center w-full text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-500 mb-4
      dark:[text-shadow:3px_3px_0_rgb(255_255_255_)]
      [text-shadow:3px_3px_0_rgb(2_6_23_)]">
						Let&apos;s keep in touch
					</h1>
					<span className="w-full flex flex-col gap-2">
						<h1>Name</h1>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="outline-none px-2 py-4 text-lg text-slate-950 border-2 border-slate-950 dark:border-white shadow-green-md"
							placeholder="type your name"
						/>
					</span>
					<span className="w-full flex flex-col gap-2">
						<h1>Email</h1>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="outline-none px-2 py-4 text-lg text-slate-950 border-2 border-slate-950 dark:border-white shadow-green-md"
							placeholder="type your email"
						/>
					</span>
					<span className="w-full flex flex-col gap-2">
						<h1>Message</h1>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={5}
							className="outline-none px-2 py-4 text-lg text-slate-950 border-2 border-slate-950 dark:border-white shadow-green-md"
							placeholder="type your message here"
						/>
					</span>
					<DelayOnReveal className="flex gap-2 w-max items-center border-2 relative hover:animate-up-down hover:underline border-slate-950 dark:border-white shadow-green-sm dark:bg-white dark:text-slate-950">
						<button
							disabled={loading}
							type="submit"
							className="flex gap-2 md:px-6 md:py-4 px-3 py-1.5 text-sm md:text-base items-center">
							{loading ? <Loader2 className="animate-spin" /> : "Send Message"}
						</button>
					</DelayOnReveal>
				</form>
			</div>
		</div>
	);
};

export default Contact;
