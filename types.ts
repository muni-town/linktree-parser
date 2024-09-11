type Link = {
  id: number;
  type: "HEADER" | "CLASSIC" | "EXTENSION" | "YOUTUBE_VIDEO";
  title: string;
  position: number;
  url?: string;
  shouldRouteToProfile: boolean;
  modifiers?: {
    thumbnailUrl: string | null;
    animation: any | null;
    isForwarding: boolean;
    isForwardingActive: boolean;
    amazonAffiliate: string | null;
    layoutOption: string | null;
  };
  context: { headerLayoutOption: string | null };
  metadata: any | null;
  parent: any | null;
};

type SocialLink = {
  type: string;
  url: string;
  position: number;
};

type Theme = {
  key: string;
  luminance: string;
  background: { color: string; style: string; type: string };
  buttonStyle: {
    type: string;
    backgroundStyle: { color: string };
    shadowStyle: { color: string };
    textStyle: { color: string };
  };
  typeface: { color: string; family: string };
};
type Account = {
  id: number;
  uuid: number;
  username: string;
  isActive: boolean;
  status?: string;
  profilePictureUrl?: string;
  pageTitle: string;
  description: string;
  socialLinksPosition: "TOP" | "BOTTOM";
  createdAt: number;
  updatedAt: number;
  links: Link[];
  socialLinks: SocialLink[];
  avatarMode: "CIRCLE_SMALL";
  backgroundHeroColor: string;
  googleAnalyticsId: string | null;
  facebookPixelId: string | null;
  tiktokPixelId: string | null;
  donationsActive: boolean;
  causeBanner: string;
  contentWarning: string | null;
  isLogoVisible: boolean;
  useSignupLink: boolean;
  expandableLinkCaret: boolean;
  defaultProfilePage: string;
  verticals: string[];
  customAvatar: string | null;
  customAvatarAttributes: string | null;
  backgroundImageAttributes: string | null;
  profileBadges: any[] | null;
  isVenmoEnabled: boolean;
  isSquareWalletEnabled: boolean;
  isCookieBannerEnabled: boolean;
  isInitialsProfileEnabled: boolean;
  isWhatsappNotificationsEnabled: boolean;
  isShareLinksEnabled: boolean;
  isOnlyfansSEOEnabled: boolean;
  isShareWithEllipsis: boolean;
  linkTypesForSEO: any | null;
  manualTitleTag: string | null;
  dynamicMetaTitle: string | null;
  dynamicMetaDescription: string | null;
  enableDynamicProfilePageMetadata: boolean;
  linkPlatforms: string[];
  activeGates: any[];
  isAmazonAffiliateEnabled: boolean;
  profileLinkContentDisplayType: string;
  complementaryThemeProperties: boolean;
  timezone: string;
  profileDirectoryVerticalUrl: string;
  groupsEnabled: boolean;
  showSignupOption: boolean;
  footerCtaButton: string;
  isSnapchatSocialShareEnabled: boolean;
  isReportLinktreeEnabled: boolean;
  getDynamicMetaTitleVariation: number;
  isVisualLinkPreviewsEnabled: boolean;
  isShareLinkPreviewEnabled: boolean;
  isShareLinkPreviewVScraperEnabled: boolean;
  isStoreTabEnabled: boolean;
  isFetchCoMoFromLinktreeBackendEnabled: boolean;
  canAccessMonetizationTab: boolean;
  eligibleForMonetization: string;
  affiliateTokens: any[];
  ownedBy: {
    id: number;
    uuid: string;
    isEmailVerified: boolean;
  };
  theme: Theme;
};

type LinktreeResponse = {
  props: {
    pageProps: {
      statusCode?: number;
      account?: Account;
    };
  };
};

export type { LinktreeResponse, Account, Link, SocialLink, Theme };
