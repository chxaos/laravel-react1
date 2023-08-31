import React from 'react';
import {
  PencilIcon,
  ArrowTopRightOnSquareIcon,
  TrashIcon
} from '@heroicons/react/24/solid';
import TButton from './core/TButton';

export default function SurveyListItem({ survey, onDeleteClick }) {
  return (
    <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:shadow-2xl hover:shadow-teal-900 hover:ring-1 hover:ring-indigo-950/50 hover:scale-105  transition-transform h-[470px]">
      <img
        src={survey.image_url}
        alt={survey.title}
        className="w-full h-48 object-cover"
      />
      <h4 className="mt-4 text-lg font-bold">{survey.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: survey.description }}
        className="overflow-y-auto flex-1"
      ></div>

      <div className="flex justify-between items-center mt-5">
        <TButton to={`survey/${survey.id}`}>
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </TButton>

        <div className="flex items-center">
          <TButton href={`/view/survey/${survey.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </TButton>

          {survey.id && (
            <TButton onClick={onDeleteClick} circle link color="red">
              <TrashIcon className="w-5 h-5" />
            </TButton>
          )}
        </div>
      </div>
    </div>
  );
}
