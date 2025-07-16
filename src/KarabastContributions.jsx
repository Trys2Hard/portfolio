import DefaultProject from './DefaultProject';

export default function KarabastContributions() {
    return (
        <DefaultProject
            src='Karabast.png'
            projectTitle='Open Source Contributions'
            projectSubtitle={
                <>
                    <strong>20+</strong> contributions made to{' '}
                    <a
                        href="https://www.karabast.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                    >
                        Karabast.net
                    </a>.
                </>}
            buttons={[
                { href: 'https://github.com/SWU-Karabast/forceteki-client/pulls?q=is%3Apr+is%3Amerged+author%3ATrys2Hard+', label: 'Contributions' },
            ]} />
    );
}
