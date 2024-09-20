import { FC } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Chip from "@/components/Chip";


const ComponentsIndex: FC = () => {

  return (
    <div>
      <Breadcrumb sub_page_1="Development" active_page="Components"/>

      <div className="py-4 grid grid-cols-1 md:grid-cols-2">
        {/** Breadcrumb */}
        <div className="py-6">
          <h3 className="font-bold text-lg tracking-wider uppercase">Breadcrumb</h3>
          <code className="text-violet-300 text-xs">All active pages link to the current page.</code>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Homepage</h3>
            <code className="text-violet-300 text-xs pb-2">Always links to homepage.</code>

            <Breadcrumb/>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Search Pages</h3>
            <code className="text-violet-300 text-xs pb-2">Shows icon to signal search page.</code>

            <Breadcrumb active_page="Tokens"/>
            <Breadcrumb active_page="Pools"/>
            <Breadcrumb active_page="Curators"/>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Icon'd Pages</h3>
            <code className="text-violet-300 text-xs pb-2">Shows icon to signal a unique page.</code>

            <Breadcrumb sub_page_1="Tokens" active_page="mom"/>
            <Breadcrumb sub_page_1="Pools" active_page="dave"/>
            <Breadcrumb sub_page_1="Curators" active_page="ASHE"/>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Development Pages</h3>
            <code className="text-violet-300 text-xs pb-2">Shows icon to signal a development page.</code>

            <Breadcrumb active_page="Development"/>
            <Breadcrumb sub_page_1="Development" active_page="Kanban"/>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Up to 4 Subpages!</h3>
            <code className="text-violet-300 text-xs pb-2">Shouldn't need more than 4 subpages on any website.</code>

            <Breadcrumb sub_page_1="Item 1" sub_page_2="Item 2" sub_page_3="Item 3" sub_page_4="Item 4" active_page="Item 5"/>
          </div>
        </div>
        
        {/** Button */}
        <div className="py-6">
          <h3 className="font-bold text-lg tracking-wider uppercase">Button</h3>
          <code className="text-violet-300 text-xs">
            Natrually, the button will fill out whatever space given, to counter this, the outer div should limit this.<br/>
            Below, we use a flex wrapped row.
          </code>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">4 Sizes</h3>
            <code className="text-violet-300 text-xs pb-2">4 basic sizes is all you'll ever need.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Button text="xsmall" size="xs"/>
              </div>
              <div>
                <Button text="small" size="sm"/>
              </div>
              <div>
                <Button text="medium" size="md"/>
              </div>
              <div>
                <Button text="large" size="lg"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">2 Bold Types</h3>
            <code className="text-violet-300 text-xs pb-2">If a component has a bold option, we use medium or bold.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Button text="small medium" size="sm" bold_type="medium"/>
              </div>
              <div>
                <Button text="small bold" size="sm" bold_type="bold"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">URL Type Buttons</h3>
            <code className="text-violet-300 text-xs pb-2">Buttons have an optional link method, which can expand to opening a new tab.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Button text="This Tab" size="sm" url=""/>
              </div>
              <div>
                <Button text="New Tab" size="sm" url="" target="_blank"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Icon'd Buttons</h3>
            <code className="text-violet-300 text-xs pb-2">Buttons can also accept any icon from our Icon component.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Button text="Unity Logo" size="xs" icon="logo"/>
              </div>
              <div>
                <Button text="Curators Solid" size="sm" icon="curator_solid"/>
              </div>
              <div>
                <Button text="Rocket" size="md" icon="rocket"/>
              </div>
              <div>
                <Button text="App Solid" size="lg" icon="app_solid"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Scale'd Buttons</h3>
            <code className="text-violet-300 text-xs pb-2">Buttons can have a scale hover effect.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Button text="xsmall" size="xs" scale/>
              </div>
              <div>
                <Button text="small" size="sm" scale/>
              </div>
              <div>
                <Button text="medium" size="md" scale/>
              </div>
              <div>
                <Button text="large" size="lg" scale/>
              </div>
            </div>
          </div>
        </div>

        {/** Card */}
        <div className="py-6">
          <h3 className="font-bold text-lg tracking-wider uppercase">Card</h3>
          <code className="text-violet-300 text-xs">
            Cards are like button in which they will fill the width of whatever space you provide.<br/>
            Below, we use a flex wrapped row.
          </code>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">Basic Card</h3>
            <code className="text-violet-300 text-xs pb-2">
              A Card is whatever you make it to be. You can see different examples of Cards around Unity.
              Cards can also have a hover effect. 
            </code>

            <div className="flex flex-wrap flex-row gap-2">

              <Card>
                Basic Example
              </Card>

              <Card hover_effect>
                Hover Example
              </Card>
            </div>
          </div>
        </div>

        {/** Chip */}
        <div className="py-6">
          <h3 className="font-bold text-lg tracking-wider uppercase">Chip</h3>
          <code className="text-violet-300 text-xs">
            Chips will fill the width of whatever space you provide.<br/>
            Below, we use a flex wrapped row.
          </code>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">4 sizes</h3>
            <code className="text-violet-300 text-xs pb-2">
              4 basic sizes is all you'll ever need
            </code>

            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Chip text="xsmall" size="xs"/>
              </div>
              <div>
                <Chip text="small" size="sm"/>
              </div>
              <div>
                <Chip text="medium" size="md"/>
              </div>
              <div>
                <Chip text="large" size="lg"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap pt-6">
            <h3 className="font-medium text-sm tracking-wider uppercase">2 Bold Types</h3>
            <code className="text-violet-300 text-xs pb-2">If a component has a bold option, we use medium or bold.</code>
            <div className="flex flex-wrap flex-row gap-2">
              <div>
                <Chip text="small medium" size="sm" bold_type="medium"/>
              </div>
              <div>
                <Chip text="small bold" size="sm" bold_type="bold"/>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default ComponentsIndex;