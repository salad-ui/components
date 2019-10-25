import * as React from 'react';
import {Accordion} from '.';

export default {
  title: 'utilities/Accordion',
};

export const StartCollapsed = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleToggle = (rel: string) =>
    setExpanded(expanded => {
      if (expanded.includes(rel)) {
        return [];
      } else {
        return [rel];
      }
    });

  return (
    <>
      <Accordion expanded={expanded} onToggle={handleToggle}>
        <Accordion.Toggle rel="lorem-ipsum">Lorem Ipsum</Accordion.Toggle>
        <Accordion.Toggle rel="pirate-ipsum">Pirate Ipsum</Accordion.Toggle>
        <Accordion.Content rel="lorem-ipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dictum urna vel elit finibus, non ornare nisi lacinia. Donec quis
            felis in velit sagittis egestas. Quisque volutpat vel urna ac
            cursus. Morbi vel mi quis turpis tincidunt tincidunt eleifend sed
            ligula. Vestibulum quis odio iaculis, mollis neque nec, pellentesque
            metus. Praesent gravida sed metus vitae iaculis. Vestibulum rhoncus
            varius turpis id elementum. Nunc eget massa orci. Mauris at nisi at
            turpis molestie luctus at vitae mauris. Nullam vel commodo elit.
            Curabitur vitae orci ornare, egestas sapien in, placerat urna. Ut
            porttitor laoreet erat, sed posuere neque placerat quis.
          </p>
          <p>
            Cras scelerisque pharetra velit vitae condimentum. Phasellus et dui
            elementum leo condimentum dapibus at quis arcu. Quisque sit amet
            risus a lacus sollicitudin facilisis. Integer porta maximus felis,
            vel dapibus ex maximus eu. Etiam ut lectus in nisi sagittis gravida.
            Nulla facilisi. Aenean fringilla, tellus nec sagittis rhoncus, quam
            sapien tincidunt nunc, maximus sollicitudin tortor purus id mi.
            Curabitur ultricies malesuada sapien quis sollicitudin. Nunc gravida
            semper aliquam. Nullam auctor in est ac dictum. Curabitur imperdiet
            sed quam vitae rutrum. Suspendisse non pellentesque velit. In
            ultrices ut arcu in molestie. Praesent consectetur pharetra magna,
            quis commodo velit bibendum eu.
          </p>
        </Accordion.Content>
        <Accordion.Content rel="pirate-ipsum">
          <p>
            Jack Tar barkadeer lad salmagundi gibbet scuppers pressgang
            execution dock long boat warp. Reef sails take a caulk run a shot
            across the bow black spot transom driver pressgang carouser Pieces
            of Eight bilge rat. Haul wind gunwalls gangway lad smartly walk the
            plank deadlights hulk Nelsons folly Sea Legs.
          </p>
          <p>
            Main sheet no prey, no pay ballast execution dock reef hang the jib
            list brig handsomely yardarm. Provost sheet port Letter of Marque
            haul wind overhaul transom Pirate Round stern Sea Legs. Yawl
            coxswain Letter of Marque Jack Ketch sutler case shot Admiral of the
            Black killick lass measured fer yer chains.
          </p>
        </Accordion.Content>
      </Accordion>
    </>
  );
};
