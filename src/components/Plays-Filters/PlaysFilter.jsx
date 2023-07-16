import { Disclosure } from "@headlessui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const PlaysFilter = (props) => {
  return (
    <Disclosure className="bg-white px-2 py-4 shadow-lg">
      {({ open }) => {
        return (
          <>
            <Disclosure.Button className="py-2 flex items-center gap-3">
              {open ? <FiChevronUp /> : <FiChevronDown />}{" "}
              <span className="font-bold">{props.title}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <div className="flex items-center gap-3 flex-wrap">
                {props.tags.map((tag) => {
                  return (
                    <>
                      <div className="border-2 border-gray-200 px-3 py-2">
                        <span>{tag}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        );
      }}
    </Disclosure>
  );
};

export default PlaysFilter;
