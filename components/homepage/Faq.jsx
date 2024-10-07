
import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    { question: 'Is there free trial available ?', answer: 'Gocingo is a donation platform that allows people to support various causes and fundraisers.' },
    { question: 'What features are included in the free trails?', answer: 'You can donate by selecting a cause, entering the amount you wish to donate, and submitting your payment information.' },
    { question: 'What features are included in the free trails?', answer: 'You can donate by selecting a cause, entering the amount you wish to donate, and submitting your payment information.' },
    { question: 'Is there a limit to the duration of the free trials?', answer: 'You can donate by selecting a cause, entering the amount you wish to donate, and submitting your payment information.' },
];


function Faq() {
    return (
        <div className="max-w-8xl  container mx-auto md:py-10 p-5 md:p-0">
            <div className="bg-gray-200 p-10 rounded-3xl">
                <div className="text-center lg:py-10 py-5">
                    <h2 className="font-semibold text-2xl lg:text-5xl lg:py-5 p-3">Frequently asked questions</h2>
                    <small className="lg:text-xl text-md">Everything you need to know</small>
                </div>

                <div>
                    <Accordion>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                header={({ state: { isEnter } }) => (
                                    <div className="flex justify-between gap-3 items-center cursor-pointer w-full py-4 border border-t border-t-white">
                                        <span className="font-semibold truncate">{faq.question}</span>
                                        <span className="border border-gray-500 p-1 rounded-full text-gray-400">{isEnter ? <FaMinus /> : <FaPlus />}</span>
                                    </div>
                                )}
                            >
                                <div className="mt-1 text-gray-600 px-2">{faq.answer}</div>
                            </AccordionItem>
                            
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq;