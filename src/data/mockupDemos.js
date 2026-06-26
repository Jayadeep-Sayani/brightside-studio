import HarborCafeSite from '../mockups/harbor-cafe/HarborCafeSite'
import LumenSalonSite from '../mockups/lumen-salon/LumenSalonSite'
import DriftBistroSite from '../mockups/drift-bistro/DriftBistroSite'

export const mockupDemos = {
  harbor: {
    url: 'harborcafe.co',
    variant: 'cafe',
    label: 'Harbor Café',
    mobilePreview: true,
    Site: HarborCafeSite,
  },
  drift: {
    url: 'driftbistro.com',
    variant: 'bistro',
    label: 'Drift Bistro',
    Site: DriftBistroSite,
  },
  lumen: {
    url: 'lumensalon.com',
    variant: 'salon',
    label: 'Lumen Salon',
    mobilePreview: true,
    Site: LumenSalonSite,
  },
}
