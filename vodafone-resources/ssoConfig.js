VF.ssoConfig = window.VF.ssoConfig || {
      providerID:               "vodafone",
      client_id:                "my_vodafone",
      response_type:            "token id_token",
      redirect_uri:             "https://www.vodafone.nl/my/",
      authorization:            "https://www.vodafone.nl/sso/authorize",
      post_logout_redirect_uri: "https://www.vodafone.nl/my/account/uitgelogd.shtml",
      token_prefix:             "vf-sso-",
      scope:                    "openid hawaii_sso email hawaii_backend",
      logoutButtonSelector:     ".js-logout",
      sendToDefaultRedirectUri: [
        "/cobrowsing/",
        "/my/account/login.shtml"
      ],
      defaultRedirectUri:       "https://www.vodafone.nl/my/",
      ssoBaseUri:               "https://www.vodafone.nl"
    };