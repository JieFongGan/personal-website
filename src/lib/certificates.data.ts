import type { CertificateType } from "@lib/types";

export const certificatesData: CertificateType[] = [
    {
        title: "CCNAv7: Enterprise Networking, Security, and Automation",
        credentialType: "Certificate of Course Completion",
        issuer: "Cisco Networking Academy",
        issuerUrl: "https://www.netacad.com/",
        academy: "Tunku Abdul Rahman University of Management and Technology",
        location: "Malaysia",
        date: new Date(2023, 4, 21),
        description: `Completed the Cisco Networking Academy's CCNAv7 course and earned a student-level credential, demonstrating proficiency in configuring, securing, and scaling enterprise networks.`,
        skills: [
            "OSPFv2 Routing",
            "IPv4 ACLs",
            "NAT Services",
            "Network Security",
            "WAN & Remote Access",
            "QoS",
            "Network Automation",
        ],
        file: "/certificates/CCNAv7.pdf",
        previewImage: "/certificates/ccnav7.png",
    },
];
