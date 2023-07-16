import { Dialog, Transition } from "@headlessui/react";
// import Logo from "../../assets/Images/cine-pass.png";

export const PaymentModal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  // const launchRazorPay = () => {
  //   let options = {
  //     key: "rzp_test_N6TRgQlLP98nlk",
  //     amount: 199 * 100,
  //     currency: "INR",
  //     name: "Cine Pass",
  //     description: "Movie Ticket Booking",
  //     // image: Logo,
  //     handler: () => {
  //       setIsOpen(false);
  //       alert("Payment Done");
  //     },
  //     // theme: { color: "#ffff00" },
  //   };

  //   const RazorPay = new window.Razorpay(options);
  //   RazorPay.open();
  // };

  const launchPayment = () => {
    alert(`Payment Successful`);
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Hello please click on the below button to book your seats
                    </p>
                  </div>

                  <div className="mt-4 w-full">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-cinePass px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-cinePass focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mb-2"
                      onClick={launchPayment}
                    >
                      Pay ₹199
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-cinePass px-4 py-2 text-sm font-medium text-black hover:bg-black hover:text-cinePass focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
