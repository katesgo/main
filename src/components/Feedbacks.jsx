import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[450px] w-full items-center"
	>
				<div className="relative w-[350px] h-[260px] flex flex-wrap">
					<img
					 src={image}
					 alt={name}
					 className="w-full h-full object-cover rounded-2xl hover:blur-sm shadow-[#c277f7] shadow-xl"
					/>
		</div>
		<div className="mt-5">
						<h3 className="text-white font-bold text-[24px]">{name}</h3>
		</div>
	</motion.div>
)

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
		<div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My other works</p>
				<h2 className={styles.sectionHeadText}>Drawings / Paintings</h2>
			</motion.div>

		</div>

		<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
			{testimonials.map((testimonial, index) => (
				<FeedbackCard 
					key={testimonial.name}
					index={index}
					{...testimonial}
				/>
			))}
		</div>
	</div>
  )
}

	
export default SectionWrapper(Feedbacks, "");