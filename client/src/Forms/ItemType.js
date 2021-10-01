import React from 'react';
import CodeSnippetItem from './ItemComponents/CodeSnippetItem';
import MicroSolutionItem from './ItemComponents/MicroSolutionItem';
import ProjectOverviewItem from './ItemComponents/ProjectOverviewItem';
import IndustryLearningItem from './ItemComponents/IndustryLearningItem';
import QnAItem from './ItemComponents/QnAItem';


export default function ItemType(props) {
  const { formState, handleEditorContentChange, handleEditorFilesChange, handleIndustryFilesChange} = props;

  const stepContent = (step) => {

    switch (step) {

      case "Code Snippet":
        return (
          <CodeSnippetItem />
        );

      case "Micro Solution":
        return (
          <MicroSolutionItem />
        );

      case "QnA":
        return (
          <QnAItem />
        );

      case "Project Overview":
        return (
          <ProjectOverviewItem
          formState={formState} 
          handleEditorContentChange={handleEditorContentChange}
          handleEditorFilesChange={handleEditorFilesChange}
          />
        );

      case "Industry Learning":
        return (
          <IndustryLearningItem 
          handleIndustryFilesChange={handleIndustryFilesChange}
          />
        );
      default:
        (console.log('==='))
    }
  }

  return (
    <React.Fragment>
      {stepContent(formState.itemType)}
    </React.Fragment>
  );
}