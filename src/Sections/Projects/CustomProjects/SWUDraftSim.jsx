import DefaultProject from '../DefaultProject';

export default function SWUDraftSim() {
    return (
        <DefaultProject
            src='swudraftsim.png'
            projectTitle='SWUDraftSim'
            projectSubtitle='A Star Wars Unlimited TCG Draft Simulator'
            buttons={[
                { href: 'https://github.com/Trys2Hard/swu-draft-sim/', label: 'Source Code' },
                { href: 'https://www.swudraftsim.com/', label: 'Website' },
            ]} />
    );
}
