import { useContext, useState } from "react";
import jobs from "../data/jobs";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const CareerCards = () => {
    const { user } = useContext(AuthContext);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleApply = (job) => {
        if (!user) {
            toast.info("Please login to apply for a job.");
            return;
        }
        setSelectedJob(job);
        document.getElementById("apply_modal").showModal();
    };

    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="card bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5 space-y-4"
                    >
                        <h2 className="text-xl font-bold">{job.title}</h2>
                        <p className="text-gray-600 text-sm">{job.description}</p>

                        <div className="text-sm text-gray-500 space-y-1">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt /> <span>{job.location}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaClock /> <span>{job.type}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCalendarAlt /> <span>Apply by: {job.deadline}</span>
                            </p>
                        </div>

                        <div className="pt-3">
                            <button
                                onClick={() => handleApply(job)}
                                className="btn btn-primary bg-black border-0 btn-sm w-full"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <dialog id="apply_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Application Received!</h3>
                    <p className="py-4">
                        {selectedJob?.title
                            ? `Thank you for applying for "${selectedJob.title}". We’ll email you soon — stay ready!`
                            : "We’ll email you soon — stay ready!"}
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-neutral btn-sm">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default CareerCards;
