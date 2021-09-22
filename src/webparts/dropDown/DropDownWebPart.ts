import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneCheckbox ,
  PropertyPaneChoiceGroup,
  PropertyPaneButton,
  PropertyPaneHorizontalRule,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './DropDownWebPart.module.scss';
import * as strings from 'DropDownWebPartStrings';

export interface IDropDownWebPartProps {
  description: string;
  City: string;
  isChecked:string;
  Radio:string;
  FileType:string;
}

export default class DropDownWebPart extends BaseClientSideWebPart<IDropDownWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.dropDown }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">My First WebPart</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${ styles.description }">${escape(this.properties.City)}</p>
              <p class="${ styles.description }">${escape(this.properties.isChecked)}</p>
              <p class="${ styles.description }">${escape(this.properties.Radio)}</p>
              <p class="${ styles.description }">${escape(this.properties.FileType)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('City',{
                  label: "Dropdown",
                  
                  options :[
                    {key: 'Karachi', text :'Karachi'},
                    {key: 'Lahore', text :'Lahore'},
                    {key: 'Multan', text :'Multan'},
                    {key: 'Islamabad', text :'Islamabad'}
                  ]
                }),
                PropertyPaneTextField('isChecked', {
                  label: strings.DescriptionFieldLabel
                  }),
                  PropertyPaneCheckbox('isChecked',
                  {
                   
                  text:'English',
              
                  checked:true,
                  disabled: false
                  

                  }),
                  
                
PropertyPaneChoiceGroup('Radio', {
  label: 'Choices',
  options: [
   { key: '2Cols', text: 'Two columns' },
   { key: '3Cols', text: 'Three columns', checked: true },
   { key: 'Horizontal', text: 'Horizontal' }
 ]
}),
PropertyPaneChoiceGroup('FileType', {
  label: 'File type:',
  options: [
   { key: 'Word', text: 'Word',
     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png',
     imageSize: { width: 32, height: 32 },
     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/docx_32x1.png'
   },
   { key: 'Excel', text: 'Excel',
     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png',
     imageSize: { width: 32, height: 32 },
     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/xlsx_32x1.png'
   },
   { key: 'PowerPoint', text: 'PowerPoint',
     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png',
     imageSize: { width: 32, height: 32 },
     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/pptx_32x1.png'
   },
   { key: 'OneNote', text: 'OneNote',
     imageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png',
     imageSize: { width: 32, height: 32 },
     selectedImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/png/one_32x1.png'
   }
 ]
}),
    
              ]
              
            }
          ]
        }
      ]
    };
  }
}
