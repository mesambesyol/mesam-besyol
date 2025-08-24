import { Doctor } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dt-hasan-sinankili',
    name: 'Hasan Sinankılı',
    title: { tr: 'Kurucu Diş Hekimi', en: 'Founder, Dentist', de: 'Gründer, Zahnarzt' },
    imageUrl: 'https://i.imgur.com/I1xVfoD.jpeg',
    bio: { 
      tr: 'Cumhuriyet Üniversitesi Diş Hekimliği Fakültesi\'nden 2017 yılında mezun olmuştur. Kliniğimizin kurucusu olarak, hasta memnuniyeti ve modern tedavi yöntemlerini ön planda tutmaktadır.',
      en: 'Graduated from Cumhuriyet University Faculty of Dentistry in 2017. As the founder of our clinic, he prioritizes patient satisfaction and modern treatment methods.',
      de: 'Absolvierte 2017 die Fakultät für Zahnmedizin der Cumhuriyet Universität. Als Gründer unserer Klinik legt er Wert auf Patientenzufriedenheit und moderne Behandlungsmethoden.'
    },
    details: {
      introduction: {
        tr: 'Dt. Hasan Sinankılı, kliniğimizin kurucusu olarak hem idari hem de klinik süreçlerde liderlik etmektedir. Hasta odaklı bir hizmet anlayışıyla, Mesam Beşyol\'un Bursa\'da güvenilir bir sağlık merkezi olmasını sağlamıştır. Modern diş hekimliğindeki yenilikleri kliniğe entegre ederek, hastalara en iyi tedavi deneyimini sunmayı hedefler.',
        en: 'As the founder of our clinic, Dt. Hasan Sinankılı provides leadership in both administrative and clinical processes. With a patient-oriented service approach, he has ensured that Mesam Besyol is a reliable health center in Bursa. He aims to offer the best treatment experience to patients by integrating innovations in modern dentistry into the clinic.',
        de: 'Als Gründer unserer Klinik übernimmt Dt. Hasan Sinankılı die Führung in administrativen und klinischen Prozessen. Mit einem patientenorientierten Serviceansatz hat er sichergestellt, dass Mesam Beşyol ein zuverlässiges Gesundheitszentrum in Bursa ist. Er zielt darauf ab, den Patienten das beste Behandlungserlebnis zu bieten, indem er Innovationen der modernen Zahnmedizin in die Klinik integriert.'
      },
      sections: [
        {
          title: { tr: 'Eğitim', en: 'Education', de: 'Ausbildung' },
          icon: 'academic',
          content: {
            tr: '<ul><li>Cumhuriyet Üniversitesi – Diş Hekimliği Fakültesi (2017)</li></ul>',
            en: '<ul><li>Cumhuriyet University – Faculty of Dentistry (2017)</li></ul>',
            de: '<ul><li>Universität Cumhuriyet – Fakultät für Zahnmedizin (2017)</li></ul>',
          }
        },
        {
          title: { tr: 'Klinik Odak Alanları', en: 'Clinical Focus Areas', de: 'Klinische Schwerpunkte' },
          icon: 'sparkles',
          content: {
            tr: '<ul><li>Genel Diş Hekimliği</li><li>Klinik Yönetimi</li><li>Estetik Diş Hekimliği Planlaması</li><li>Hasta İlişkileri Yönetimi</li></ul>',
            en: '<ul><li>General Dentistry</li><li>Clinic Management</li><li>Aesthetic Dentistry Planning</li><li>Patient Relations Management</li></ul>',
            de: '<ul><li>Allgemeine Zahnheilkunde</li><li>Klinikmanagement</li><li>Planung der ästhetischen Zahnheilkunde</li><li>Patientenbeziehungsmanagement</li></ul>',
          }
        }
      ]
    }
  },
  {
    id: 'dt-burak-senol',
    name: 'Burak Şenol',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnarzt' },
    imageUrl: 'https://i.imgur.com/P2gVf6H.jpg',
    bio: { 
      tr: 'Cumhuriyet Üniversitesi mezunu, cerrahi ve estetik diş tedavileri alanında deneyimli diş hekimi. Gömülü 20 yaş diş çekimleri ve implantoloji uygulamalarında uzmanlaşmıştır.',
      en: 'A graduate of Cumhuriyet University, an experienced dentist in surgical and aesthetic dental treatments. He specializes in impacted wisdom tooth extractions and implantology applications.',
      de: 'Absolvent der Cumhuriyet-Universität, ein erfahrener Zahnarzt für chirurgische und ästhetische Zahnbehandlungen. Er ist spezialisiert auf die Extraktion impaktierter Weisheitszähne und implantologische Anwendungen.'
    },
    details: {
      introduction: {
        tr: 'Cumhuriyet Üniversitesi Diş Hekimliği Fakültesi mezunu, cerrahi ve estetik diş tedavileri alanında deneyimli diş hekimi. Gömülü 20 yaş diş çekimleri, estetik dolgular, diş eti hastalıkları ve implantoloji uygulamalarında uzmanlaşmış. Hasta memnuniyetine odaklı, gelişen diş hekimliği teknolojilerini yakından takip eden bir profesyonel.',
        en: 'A graduate of Cumhuriyet University Faculty of Dentistry, an experienced dentist in the fields of surgical and aesthetic dental treatments. Specializing in impacted wisdom tooth extractions, aesthetic fillings, gum diseases, and implantology applications. A professional focused on patient satisfaction who closely follows developing dental technologies.',
        de: 'Absolvent der Fakultät für Zahnmedizin der Cumhuriyet-Universität, ein erfahrener Zahnarzt auf den Gebieten der chirurgischen und ästhetischen Zahnbehandlungen. Spezialisiert auf die Extraktion impaktierter Weisheitszähne, ästhetische Füllungen, Zahnfleischerkrankungen und implantologische Anwendungen. Ein auf Patientenzufriedenheit ausgerichteter Profi, der die sich entwickelnden zahnmedizinischen Technologien genau verfolgt.'
      },
      sections: [
        {
          title: { tr: 'Eğitim', en: 'Education', de: 'Ausbildung' },
          icon: 'academic',
          content: { tr: '<ul><li>Cumhuriyet Üniversitesi – Diş Hekimliği Fakültesi (2021)</li></ul>', en: '<ul><li>Cumhuriyet University – Faculty of Dentistry (2021)</li></ul>', de: '<ul><li>Universität Cumhuriyet – Fakultät für Zahnmedizin (2021)</li></ul>' }
        },
        {
          title: { tr: 'Deneyim', en: 'Experience', de: 'Erfahrung' },
          icon: 'briefcase',
          content: { tr: '<ul><li>Cerrahi Diş Tedavileri – Gömülü 20 yaş diş çekimleri ve implant uygulamaları</li><li>Diş Eti Hastalıkları – Periodontal tedaviler ve estetik diş eti operasyonları</li><li>Protetik Diş Tedavileri – Kron, köprü ve protez uygulamaları</li></ul>', en: '<ul><li>Surgical Dental Treatments – Impacted wisdom tooth extractions and implant applications</li><li>Gum Diseases – Periodontal treatments and aesthetic gum surgeries</li><li>Prosthetic Dental Treatments – Crown, bridge, and prosthesis applications</li></ul>', de: '<ul><li>Chirurgische Zahnbehandlungen – Extraktionen impaktierter Weisheitszähne und Implantatanwendungen</li><li>Zahnfleischerkrankungen – Parodontalbehandlungen und ästhetische Zahnfleischoperationen</li><li>Prothetische Zahnbehandlungen – Kronen-, Brücken- und Prothesenanwendungen</li></ul>' }
        },
        {
          title: { tr: 'Uzmanlık Alanları', en: 'Areas of Expertise', de: 'Fachgebiete' },
          icon: 'sparkles',
          content: { tr: '<ul><li>Cerrahi ve estetik diş tedavileri</li><li>Diş eti hastalıklarının tedavisi</li><li>Gömülü 20 yaş diş çekimleri</li><li>Estetik dolgu uygulamaları</li><li>İmplantoloji</li></ul>', en: '<ul><li>Surgical and aesthetic dental treatments</li><li>Treatment of gum diseases</li><li>Impacted wisdom tooth extractions</li><li>Aesthetic filling applications</li><li>Implantology</li></ul>', de: '<ul><li>Chirurgische und ästhetische Zahnbehandlungen</li><li>Behandlung von Zahnfleischerkrankungen</li><li>Extraktionen impaktierter Weisheitszähne</li><li>Ästhetische Füllungsanwendungen</li><li>Implantologie</li></ul>' }
        },
        {
          title: { tr: 'Sertifikalar ve Kurslar', en: 'Certificates and Courses', de: 'Zertifikate und Kurse' },
          icon: 'clipboard',
          content: { tr: '<ul><li>İmplantoloji Sertifikası</li><li>Estetik Dolgu Kursu</li></ul>', en: '<ul><li>Implantology Certificate</li><li>Aesthetic Filling Course</li></ul>', de: '<ul><li>Implantologie-Zertifikat</li><li>Kurs für ästhetische Füllungen</li></ul>' }
        }
      ]
    }
  },
  {
    id: 'dt-furkan-akyildiz',
    name: 'Furkan Akyıldız',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnarzt' },
    imageUrl: 'https://i.imgur.com/I1xVfoD.jpeg',
    bio: { 
      tr: 'Ankara Yıldırım Beyazıt Üniversitesi mezunu, estetik ve restoratif tedavilere odaklanmış genç ve dinamik bir diş hekimidir.',
      en: 'A young and dynamic dentist, graduate of Ankara Yıldırım Beyazıt University, focused on aesthetic and restorative treatments.',
      de: 'Ein junger und dynamischer Zahnarzt, Absolvent der Ankara Yıldırım Beyazıt Universität, spezialisiert auf ästhetische und restaurative Behandlungen.'
    },
    details: {
      introduction: {
        tr: 'Ankara Yıldırım Beyazıt Üniversitesi Diş Hekimliği Fakültesi mezunu, genç ve dinamik diş hekimi. Özellikle estetik diş hekimliği ve restoratif tedaviler alanında kendini geliştirmeye odaklanmıştır. Hasta memnuniyetini önceliklendiren, modern diş hekimliği teknolojilerini ve güncel tedavi yaklaşımlarını yakından takip eden, iletişimi güçlü bir profesyoneldir.',
        en: 'A young and dynamic dentist, graduate of Ankara Yıldırım Beyazıt University Faculty of Dentistry. He is particularly focused on improving himself in the fields of aesthetic dentistry and restorative treatments. A professional with strong communication skills who prioritizes patient satisfaction and closely follows modern dental technologies and current treatment approaches.',
        de: 'Ein junger und dynamischer Zahnarzt, Absolvent der Fakultät für Zahnmedizin der Ankara Yıldırım Beyazıt Universität. Er konzentriert sich besonders auf die Weiterentwicklung in den Bereichen ästhetische Zahnheilkunde und restaurative Behandlungen. Ein Profi mit starken Kommunikationsfähigkeiten, der die Zufriedenheit der Patienten priorisiert und moderne zahnmedizinische Technologien und aktuelle Behandlungsansätze genau verfolgt.'
      },
      sections: [
        {
          title: { tr: 'Eğitim', en: 'Education', de: 'Ausbildung' },
          icon: 'academic',
          content: { tr: '<ul><li>Ankara Yıldırım Beyazıt Üniversitesi – Diş Hekimliği Fakültesi (2023)</li></ul>', en: '<ul><li>Ankara Yıldırım Beyazıt University – Faculty of Dentistry (2023)</li></ul>', de: '<ul><li>Universität Ankara Yıldırım Beyazıt – Fakultät für Zahnmedizin (2023)</li></ul>' }
        },
        {
          title: { tr: 'Deneyim ve Klinik Yetkinlikler', en: 'Experience and Clinical Competencies', de: 'Erfahrung und klinische Kompetenzen' },
          icon: 'briefcase',
          content: { tr: 'Üniversite eğitimi süresince yoğun staj ve klinik uygulama programları aracılığıyla, aşağıdaki alanlarda pratik deneyim kazanmıştır:<ul><li>Restoratif Diş Tedavileri – Estetik dolgu, inley ve onley uygulamaları</li><li>Endodonti – Kök kanal tedavisi prosedürleri</li><li>Periodontoloji – Temel diş eti hastalıkları tedavisi ve diş taşı temizliği</li><li>Koruyu Hekimlik – Fissür örtücü ve florür uygulamaları</li></ul>', en: '<ul><li>Restorative Dental Treatments – Aesthetic fillings, inlay, and onlay applications</li><li>Endodontics – Root canal treatment procedures</li><li>Periodontology – Basic gum disease treatment and tartar cleaning</li><li>Preventive Dentistry – Fissure sealant and fluoride applications</li></ul>', de: '<ul><li>Restaurative Zahnbehandlungen – Ästhetische Füllungen, Inlay- und Onlay-Anwendungen</li><li>Endodontie – Wurzelkanalbehandlungsverfahren</li><li>Parodontologie – Grundlegende Behandlung von Zahnfleischerkrankungen und Zahnsteinentfernung</li><li>Präventivzahnmedizin – Fissurenversiegelung und Fluoridanwendungen</li></ul>' }
        },
        {
          title: { tr: 'İlgi ve Uzmanlık Alanları', en: 'Areas of Interest and Expertise', de: 'Interessen- und Fachgebiete' },
          icon: 'sparkles',
          content: { tr: '<ul><li>Estetik dolgu uygulamaları (Kompozit)</li><li>Kompozit lamina ve bonding uygulamaları</li><li>Diş beyazlatma (Bleaching) işlemleri</li><li>Koruyucu ve önleyici diş hekimliği</li></ul>', en: '<ul><li>Aesthetic filling applications (Composite)</li><li>Composite laminate and bonding applications</li><li>Teeth whitening (Bleaching) procedures</li><li>Preventive and prophylactic dentistry</li></ul>', de: '<ul><li>Ästhetische Füllungsanwendungen (Komposit)</li><li>Kompositlaminat- und Bonding-Anwendungen</li><li>Zahnaufhellungsverfahren (Bleaching)</li><li>Präventive und prophylaktische Zahnheilkunde</li></ul>' }
        }
      ]
    }
  },
  {
    id: 'dt-furkan-emre-yildiz',
    name: 'Furkan Emre Yıldız',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnarzt' },
    imageUrl: 'https://i.imgur.com/P2gVf6H.jpg',
    bio: { 
      tr: 'Gazi Üniversitesi mezunu, kanal tedavisi ve protetik diş tedavileri alanında yetkin, hasta memnuniyeti odaklı bir profesyoneldir.',
      en: 'A graduate of Gazi University, a competent professional in root canal treatment and prosthetic dentistry, focused on patient satisfaction.',
      de: 'Absolvent der Gazi-Universität, ein kompetenter Fachmann für Wurzelkanalbehandlungen und prothetische Zahnheilkunde, der sich auf die Zufriedenheit der Patienten konzentriert.'
    },
    details: {
      introduction: {
        tr: 'Gazi Üniversitesi Diş Hekimliği Fakültesi 2022 yılı mezunu, klinik uygulama ve hasta memnuniyeti odaklı bir yaklaşıma sahip diş hekimi. Güncel tedavi protokollerini ve teknolojik gelişmeleri yakından takip ederek, hastalarına hem fonksiyonel hem de estetik açıdan en iyi çözümleri sunmayı hedeflemektedir.',
        en: 'A 2022 graduate of Gazi University Faculty of Dentistry, a dentist with an approach focused on clinical practice and patient satisfaction. He aims to offer his patients the best functional and aesthetic solutions by closely following current treatment protocols and technological developments.',
        de: 'Ein Absolvent der Fakultät für Zahnmedizin der Gazi-Universität aus dem Jahr 2022, ein Zahnarzt mit einem Ansatz, der auf klinische Praxis und Patientenzufriedenheit ausgerichtet ist. Er zielt darauf ab, seinen Patienten die besten funktionellen und ästhetischen Lösungen zu bieten, indem er aktuelle Behandlungsprotokolle und technologische Entwicklungen genau verfolgt.'
      },
      sections: [
        {
          title: { tr: 'Eğitim', en: 'Education', de: 'Ausbildung' },
          icon: 'academic',
          content: { tr: '<ul><li>Gazi Üniversitesi – Diş Hekimliği Fakültesi (2022)</li></ul>', en: '<ul><li>Gazi University – Faculty of Dentistry (2022)</li></ul>', de: '<ul><li>Universität Gazi – Fakultät für Zahnmedizin (2022)</li></ul>' }
        },
        {
          title: { tr: 'Deneyim', en: 'Experience', de: 'Erfahrung' },
          icon: 'briefcase',
          content: { tr: '<ul><li>Cerrahi Diş Tedavileri – Rutin ve komplike diş çekimi uygulamaları</li><li>Endodonti – Kök kanal tedavisi prosedürleri</li><li>Protetik Diş Tedavileri – Kron, köprü ve hareketli protez uygulamaları</li><li>Diş Eti Hastalıkları – Periodontal tedaviler ve diş taşı temizliği (detertraj)</li></ul>', en: '<ul><li>Surgical Dental Treatments – Routine and complicated tooth extraction procedures</li><li>Endodontics – Root canal treatment procedures</li><li>Prosthetic Dental Treatments – Crown, bridge, and removable prosthesis applications</li><li>Gum Diseases – Periodontal treatments and tartar cleaning (scaling)</li></ul>', de: '<ul><li>Chirurgische Zahnbehandlungen – Routinemäßige und komplizierte Zahnextraktionen</li><li>Endodontie – Wurzelkanalbehandlungsverfahren</li><li>Prothetische Zahnbehandlungen – Kronen-, Brücken- und herausnehmbare Prothesenanwendungen</li><li>Zahnfleischerkrankungen – Parodontalbehandlungen und Zahnsteinentfernung (Scaling)</li></ul>' }
        },
        {
          title: { tr: 'Uzmanlık Alanları', en: 'Areas of Expertise', de: 'Fachgebiete' },
          icon: 'sparkles',
          content: { tr: '<ul><li>Kanal tedavisi (Endodonti)</li><li>Protetik diş tedavileri (Kron, Köprü)</li><li>Periodontoloji (Diş eti hastalıkları tedavisi)</li><li>Temel cerrahi işlemler (Diş çekimi)</li><li>Estetik ve restoratif diş hekimliği</li></ul>', en: '<ul><li>Root canal treatment (Endodontics)</li><li>Prosthetic dental treatments (Crown, Bridge)</li><li>Periodontology (Gum disease treatment)</li><li>Basic surgical procedures (Tooth extraction)</li><li>Aesthetic and restorative dentistry</li></ul>', de: '<ul><li>Wurzelkanalbehandlung (Endodontie)</li><li>Prothetische Zahnbehandlungen (Krone, Brücke)</li><li>Parodontologie (Behandlung von Zahnfleischerkrankungen)</li><li>Grundlegende chirurgische Eingriffe (Zahnextraktion)</li><li>Ästhetische und restaurative Zahnheilkunde</li></ul>' }
        }
      ]
    }
  },
  {
    id: 'dt-seher-kocabas',
    name: 'Seher Kocabaş',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnärztin' },
    imageUrl: 'https://i.imgur.com/cWcDQqb.jpg',
    bio: { 
      tr: 'Sivas Cumhuriyet Üniversitesi mezunu, gülüş tasarımı ve implant cerrahisi başta olmak üzere estetik diş hekimliği alanında yetkin bir profesyoneldir.',
      en: 'A graduate of Sivas Cumhuriyet University, a competent professional in aesthetic dentistry, especially in smile design and implant surgery.',
      de: 'Absolventin der Sivas Cumhuriyet Universität, eine kompetente Fachfrau für ästhetische Zahnheilkunde, insbesondere für Smile Design und Implantatchirurgie.'
    },
    details: {
      introduction: {
        tr: 'Sivas Cumhuriyet Üniversitesi Diş Hekimliği Fakültesi 2021 yılı mezunu, özellikle estetik diş hekimliği alanında yetkinliğe sahip bir profesyoneldir. Hasta memnuniyetini daima ön planda tutarak, estetik ve fonksiyonel açıdan başarılı sonuçlar elde etmeyi hedefler. Güncel tedavi yöntemlerini ve teknolojik yenilikleri sürekli takip ederek mesleki gelişimini sürdürmektedir.',
        en: 'A 2021 graduate of Sivas Cumhuriyet University Faculty of Dentistry, a professional with expertise particularly in the field of aesthetic dentistry. She always prioritizes patient satisfaction and aims to achieve aesthetically and functionally successful results. She continuously maintains her professional development by following current treatment methods and technological innovations.',
        de: 'Eine Absolventin der Fakultät für Zahnmedizin der Sivas Cumhuriyet Universität aus dem Jahr 2021, eine Fachfrau mit besonderer Kompetenz auf dem Gebiet der ästhetischen Zahnheilkunde. Sie stellt die Patientenzufriedenheit stets in den Vordergrund und zielt darauf ab, ästhetisch und funktionell erfolgreiche Ergebnisse zu erzielen. Sie setzt ihre berufliche Entwicklung fort, indem sie aktuelle Behandlungsmethoden und technologische Innovationen kontinuierlich verfolgt.'
      },
      sections: [
        {
          title: { tr: 'Eğitim', en: 'Education', de: 'Ausbildung' },
          icon: 'academic',
          content: { tr: '<ul><li>Sivas Cumhuriyet Üniversitesi – Diş Hekimliği Fakültesi (2021)</li></ul>', en: '<ul><li>Sivas Cumhuriyet University – Faculty of Dentistry (2021)</li></ul>', de: '<ul><li>Universität Sivas Cumhuriyet – Fakultät für Zahnmedizin (2021)</li></ul>' }
        },
        {
          title: { tr: 'Deneyim', en: 'Experience', de: 'Erfahrung' },
          icon: 'briefcase',
          content: { tr: '<ul><li>Estetik Diş Hekimliği – Gülüş tasarımı, diş beyazlatma (bleaching), porselen ve zirkonyum kaplama uygulamaları</li><li>İmplantoloji ve Cerrahi – İmplant cerrahisi, implant üstü protez planlaması, diş çekimi ve temel yumuşak doku cerrahisi</li><li>Endodonti ve Restoratif Tedaviler – Kök kanal tedavisi ve modern dolgu uygulamaları</li></ul>', en: '<ul><li>Aesthetic Dentistry – Smile design, teeth whitening (bleaching), porcelain and zirconium crown applications</li><li>Implantology and Surgery – Implant surgery, implant-supported prosthesis planning, tooth extraction, and basic soft tissue surgery</li><li>Endodontics and Restorative Treatments – Root canal treatment and modern filling applications</li></ul>', de: '<ul><li>Ästhetische Zahnheilkunde – Smile Design, Zahnaufhellung (Bleaching), Porzellan- und Zirkoniumkronenanwendungen</li><li>Implantologie und Chirurgie – Implantatchirurgie, Planung von implantatgetragenen Prothesen, Zahnextraktion und grundlegende Weichgewebschirurgie</li><li>Endodontie und restaurative Behandlungen – Wurzelkanalbehandlung und moderne Füllungsanwendungen</li></ul>' }
        },
        {
          title: { tr: 'Uzmanlık Alanları', en: 'Areas of Expertise', de: 'Fachgebiete' },
          icon: 'sparkles',
          content: { tr: '<ul><li>Gülüş tasarımı</li><li>Porselen ve Zirkonyum Kronlar</li><li>İmplant cerrahisi ve implant üstü protezler</li><li>Diş beyazlatma işlemleri</li><li>Yumuşak doku estetiği</li><li>Kanal tedavisi</li></ul>', en: '<ul><li>Smile design</li><li>Porcelain and Zirconium Crowns</li><li>Implant surgery and implant-supported prostheses</li><li>Teeth whitening procedures</li><li>Soft tissue aesthetics</li><li>Root canal treatment</li></ul>', de: '<ul><li>Smile Design</li><li>Porzellan- und Zirkoniumkronen</li><li>Implantatchirurgie und implantatgetragene Prothesen</li><li>Zahnaufhellungsverfahren</li><li>Weichgewebsästhetik</li><li>Wurzelkanalbehandlung</li></ul>' }
        }
      ]
    }
  },
  {
    id: 'dt-busra-beyhan',
    name: 'Büşra Beyhan',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnärztin' },
    imageUrl: 'https://i.imgur.com/cWcDQqb.jpg',
    bio: { 
      tr: 'Gazi Üniversitesi Diş Hekimliği Fakültesi mezunudur. Hastalarına modern ve etkili tedavi çözümleri sunmaya odaklanmış, iletişimi güçlü bir hekimdir.',
      en: 'A graduate of Gazi University Faculty of Dentistry. She is a communicative physician focused on providing modern and effective treatment solutions to her patients.',
      de: 'Absolventin der Fakultät für Zahnmedizin der Gazi-Universität. Sie ist eine kommunikative Ärztin, die sich darauf konzentriert, ihren Patienten moderne und wirksame Behandlungslösungen anzubieten.'
    }
  },
  {
    id: 'dt-emir-hacioglu',
    name: 'Emir Hacıoğlu',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnarzt' },
    imageUrl: 'https://i.imgur.com/P2gVf6H.jpg',
    bio: { 
      tr: 'Kliniğimizin değerli hekimlerinden Emir Hacıoğlu, hastalarına kapsamlı diş sağlığı hizmetleri sunarak, sağlıklı gülüşlere kavuşmalarına yardımcı olmaktadır.',
      en: 'One of the valuable dentists of our clinic, Emir Hacıoğlu provides comprehensive dental health services to his patients, helping them achieve healthy smiles.',
      de: 'Als einer der wertvollen Zahnärzte unserer Klinik bietet Emir Hacıoğlu seinen Patienten umfassende zahnärztliche Dienstleistungen an und hilft ihnen, ein gesundes Lächeln zu erlangen.'
    }
  },
  {
    id: 'dt-umut-kocaoglan',
    name: 'Umut Altınel',
    title: { tr: 'Diş Hekimi', en: 'Dentist', de: 'Zahnarzt' },
    imageUrl: 'https://i.imgur.com/I1xVfoD.jpeg',
    bio: { 
      tr: 'Deneyimli hekimimiz Umut Altınel, güncel tedavi yaklaşımlarıyla hastalarımızın gülüşlerini ve genel ağız sağlıklarını en üst seviyeye çıkarmayı hedeflemektedir.',
      en: 'Our experienced dentist, Umut Altınel, aims to maximize our patients\' smiles and overall oral health with current treatment approaches.',
      de: 'Unser erfahrener Zahnarzt, Umut Altınel, zielt darauf ab, das Lächeln und die allgemeine Mundgesundheit unserer Patienten mit aktuellen Behandlungsansätzen zu maximieren.'
    }
  }
];