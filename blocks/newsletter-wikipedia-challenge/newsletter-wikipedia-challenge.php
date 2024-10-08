<div id="<?= $block['id'] ?>" class="bb-newsletter-block rounded-3xl flex flex-col h-full">

    <?php if (!is_admin()): ?>
    <style>
    #customForm input,
    #customForm select {
        color: black;
    }

    #customForm input[type="button"] {
        background-color: black;
        border-color: black;
        outline-color: black;
        color: white;
        width: 100%;
        justify-content: center;
    }

    #customForm input[type="button"]:hover {
        background-color: white;
        border-color: white;
        outline-color: white;
        color: black;
    }

    [name="SIGNUP_FORM_LABEL"] {
        font-size: 18px;
    }

    #captchaDiv {
        min-height: 76px;
    }

    #captchaDiv>img {
        border-radius: 0.375em;
        border: solid 1px rgb(164, 164, 164);
    }
    </style>
    <script type="text/javascript" src="https://njyha-zcmp.maillist-manage.eu/js/optin.min.js" onload="setupSF('sf3z78dae486a4cff3e4878417f92e8b453cb69b92b3d5f7261be412a36fa693c1a2','ZCFORMVIEW',false,'acc',false,'2')"></script>
    <script type="text/javascript">
    function runOnFormSubmit_sf3z78dae486a4cff3e4878417f92e8b453cb69b92b3d5f7261be412a36fa693c1a2(th) {
        /*Before submit, if you want to trigger your event, "include your code here"*/
    }
    </script>
    <div id="sf3z78dae486a4cff3e4878417f92e8b453cb69b92b3d5f7261be412a36fa693c1a2" data-type="signupform">
        <div id="customForm">
            <input type="hidden" id="recapTheme" value="2" /><input type="hidden" id="isRecapIntegDone" value="false" /><input type="hidden" id="signupFormMode" value="copyCode" /><input type="hidden" id="signupFormType" value="LargeForm_Vertical" /><input type="hidden" id="recapModeTheme" value="" /><input type="hidden" id="signupFormMode" value="copyCode" />
            <div name="SIGNUP_PAGE" class="large_form_1_css" id="SIGNUP_PAGE" style=";  font-family: Roboto, sans-serif; text-align: center; font-size: 14px; padding: 0px">
                <div name="" changeid="" changename="" style="margin: 0px auto">
                </div>
                <div id="signupMainDiv" style="margin: 0px auto; width: 100%; min-width: 230px;" name="SIGNUPFORM" changeid="SIGNUPFORM" changename="SIGNUPFORM">
                    <div>
                        <div style="position: relative">
                            <div id="Zc_SignupSuccess" style="
                                    display: none;
                                    position: absolute;
                                    margin-left: 4%;
                                    width: 90%;
                                    background-color: white;
                                    padding: 3px;
                                    border: 3px solid rgb(194, 225, 154);
                                    margin-top: 10px;
                                    margin-bottom: 10px;
                                    word-break: break-all;
                                ">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td width="10%"><img class="successicon" src="https://njyha-zcmp.maillist-manage.eu/images/challangeiconenable.jpg" align="absmiddle" /></td>
                                            <td><span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: Roboto, sans-serif; font-size: 14px; word-break: break-word">&nbsp;&nbsp;Thank you for Signing Up</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <form method="POST" id="zcampaignOptinForm" style="margin: 0px" action="https://njyha-zcmp.maillist-manage.eu/weboptin.zc" target="_zcSignup">
                            <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL" style="border: 1px none rgb(218, 216, 216)">
                                <div id="SIGNUP_BODY" name="SIGNUP_BODY">
                                    <div style="margin: 0px auto; text-align: left">
                                        <div style="display: none; background-color: #ffebe8; padding: 10px 10px; color: #d20000; font-size: 14px; margin: 10px 0px; border: solid 1px #ffd9d3; margin-top: 20px" id="errorMsgDiv">
                                            &nbsp;&nbsp;Korrigiere bitte das/die fehlende(n) Feld(er) unten.
                                        </div>
                                        <div>
                                            <div name="fieldsdivSf" class="zcsffieldsdiv">
                                                <div>
                                                    <div class="mb-5">
                                                        <div name="SIGNUP_FORM_LABEL">
                                                            E-Mail-Adresse<span name="SIGNUP_REQUIRED">*</span>
                                                        </div>
                                                        <div class="zcinputbox">
                                                            <input name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" maxlength="100" type="email" /><span style="display: none" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                                        </div>
                                                    </div>
                                                    <div style="clear: both"></div>
                                                </div>
                                                <div>
                                                    <div class="mb-5">
                                                        <div name="SIGNUP_FORM_LABEL">
                                                            Vorname o. Pseudonym<span name="SIGNUP_REQUIRED">*</span>
                                                        </div>
                                                        <div class="zcinputbox">
                                                            <input name="FIRSTNAME" changeitem="SIGNUP_FORM_FIELD" maxlength="50" type="text" /><span style="display: none" id="dt_FIRSTNAME">1,true,1,First Name,2</span>
                                                        </div>
                                                    </div>
                                                    <div style="clear: both"></div>
                                                </div>
                                                <div>
                                                    <div class="mb-5">
                                                        <div name="SIGNUP_FORM_LABEL">
                                                            Wie wurdest du auf die Challenge aufmerksam?&nbsp;
                                                        </div>
                                                        <div class="zcinputbox">
                                                            <select name="CONTACT_CF54" zc_display_name="Wie wurdest du auf die Challenge aufmerksam?" changeitem="SIGNUP_FORM_FIELD">
                                                                <option value="Keine Angabe">Keine Angabe</option>
                                                                <option value="Social Media">Social Media</option>
                                                                <option value="Wikipedia o. Wikipedia-Banner">Wikipedia o. Wikipedia-Banner</option>
                                                                <option value="Newsletter">Newsletter</option>
                                                                <option value="Veranstaltung o. Flyer">Veranstaltung o. Flyer</option>
                                                                <option value="Über Bekannte">Über Bekannte</option>
                                                                <option value="Anderer Kanal">Anderer Kanal</option>
                                                            </select>
                                                            <span style="display: none" id="dt_CONTACT_CF54">1,false,3,Challenge aufmerksam,2</span>
                                                        </div>
                                                    </div>
                                                    <div style="clear: both"></div>
                                                </div>

                                                <div>
                                                    <div class="mb-5">
                                                        <div name="SIGNUP_FORM_LABEL">
                                                            Was erhoffst du dir in erster Linie von der Challenge?&nbsp;
                                                        </div>
                                                        <div class="zcinputbox">
                                                            <select name="CONTACT_CF56" zc_display_name="Was erhoffst du dir in erster Linie von der Challenge?" changeitem="SIGNUP_FORM_FIELD">
                                                                <option value="Keine Angabe">Keine Angabe</option>
                                                                <option value="Editieren und Schreiben lernen">Editieren und Schreiben lernen</option>
                                                                <option value="Mehr über die Wikipedia lernen">Mehr über die Wikipedia lernen</option>
                                                                <option value="Die Wikipedia-Community kennen lernen">Die Wikipedia-Community kennen lernen</option>
                                                                <option value="Teil der Wikipedia-Community werden">Teil der Wikipedia-Community werden</option>
                                                            </select>
                                                            <span style="display: none" id="dt_CONTACT_CF56">1,false,3,Challenge Erwartung,2</span>
                                                        </div>
                                                    </div>
                                                    <div style="clear: both"></div>
                                                </div>
                                            </div>
                                            <div id="captchaOld" class="recaptcha" name="captchaContainer">
                                                <div class="mb-5">
                                                    <div style="position: relative" id="captchaParent">

                                                        <svg style="cursor: pointer; position: absolute; top: 4px; left: 178px;" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onclick="loadCaptcha('https://campaigns.zoho.eu/campaigns/CaptchaVerify.zc?mode=generate',this,'#sf3z78dae486a4cff3e4878417f92e8b453cb69b92b3d5f7261be412a36fa693c1a2');" id="relCaptcha">
                                                            <path d="M1,12A11,11,0,0,1,17.882,2.7l1.411-1.41A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707l1.128-1.128A8.994,8.994,0,0,0,3,12a1,1,0,0,1-2,0Zm21-1a1,1,0,0,0-1,1,9.01,9.01,0,0,1-9,9,8.9,8.9,0,0,1-4.42-1.166l1.127-1.127A1,1,0,0,0,8,17H4a1,1,0,0,0-1,1v4a1,1,0,0,0,.617.924A.987.987,0,0,0,4,23a1,1,0,0,0,.707-.293L6.118,21.3A10.891,10.891,0,0,0,12,23,11.013,11.013,0,0,0,23,12,1,1,0,0,0,22,11Z" />
                                                        </svg>
                                                        <div id="captchaDiv" captcha="true" name=""></div>
                                                        <input class="mt-5" placeholder="Captcha*" id="captchaText" name="captchaText" changeitem="SIGNUP_FORM_FIELD" maxlength="100" type="text" />
                                                        <span name="SIGNUP_REQUIRED" id="capRequired" style="display: none;">*</span>
                                                    </div>
                                                </div>
                                                <div style="clear: both"></div>
                                            </div>
                                            <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs" />
                                            <div id="REQUIRED_FIELD_TEXT" changetype="REQUIRED_FIELD_TEXT" name="SIGNUP_REQUIRED" style="padding: 10px 10px 10px 0px; font-family: Roboto, sans-serif; font-size: 11px">
                                                *Pflichtfelder
                                            </div>
                                            <div>
                                                <input type="button" class="btn" action="Save" id="zcWebOptin" name="SIGNUP_SUBMIT_BUTTON" changetype="SIGNUP_SUBMIT_BUTTON_TEXT" style=" " value="Meine Challenge starten!" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" id="fieldBorder" value="rgb(100, 100, 100)" onload="" /><input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" onload="" /><input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" /><input type="hidden" id="submitType" name="submitType" value="optinCustomView" /><input type="hidden" id="lD" name="lD" value="11725ed2a7d41a24" /><input type="hidden" name="emailReportId" id="emailReportId" value="" /><input type="hidden" name="zx" id="cmpZuid" value="14acf2f359" /><input type="hidden" name="zcvers" value="2.0" /><input type="hidden" name="oldListIds" id="allCheckedListIds" value="" /><input type="hidden" id="mode" name="mode" value="OptinCreateView" /><input type="hidden" id="zcld" name="zcld" value="11725ed2a7d41a24" /><input type="hidden" id="zctd" name="zctd" value="11725ed2a7f20189" /><input type="hidden" id="document_domain" value="campaigns.zoho.eu" /><input type="hidden" id="zc_Url" value="njyha-zcmp.maillist-manage.eu" /><input type="hidden" id="new_optin_response_in" value="1" /><input type="hidden" id="duplicate_optin_response_in" value="1" /><input type="hidden" id="zc_formIx" name="zc_formIx" value="3z78dae486a4cff3e4878417f92e8b453cb69b92b3d5f7261be412a36fa693c1a2" />
                            </div>
                        </form>
                    </div>
                    <div style="margin: 0px auto; margin-top: 20px; text-align: left;" id="privacyNotes" identity="privacyNotes">
                        <span>Indem ich meine E-Mail-Adresse eintrage, erkläre ich mich damit einverstanden, dass Wikimedia mich aufgrund meiner Einwilligung (Art. 6 Abs. 1 lit. a) DSGVO) per E-Mail bis zum Ende der Challenge kontaktiert und die hierzu erforderlichen Datenverarbeitungen vornimmt. Ich kann meine Einwilligung jederzeit mit Wirkung für die Zukunft gegenüber Wikimedia widerrufen. Nähere Informationen zur Datenverarbeitung bei Wikimedia und zu meinen Rechten finde ich unter <a href="https://www.wikimedia.de/datenschutz">wikimedia.de/datenschutz</a>.</span>
                    </div>
                </div>
            </div>
            <input type="hidden" id="isCaptchaNeeded" value="false" /><input type="hidden" id="superAdminCap" value="0" /><img src="https://njyha-zcmp.maillist-manage.eu/images/spacer.gif" id="refImage" onload="referenceSetter(this)" style="display: none" />
        </div>
    </div>
    <div id="zcOptinOverLay" oncontextmenu="return false" style="display: none; text-align: center; background- opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px"></div>
    <div id="zcOptinSuccessPopup" style="
            display: none;
            z-index: 9999;
            width: 800px;
            height: 40%;
            top: 84px;
            position: fixed;
            left: 26%;
            background-color: #ffffff;
            border-color: #e6e6e6;
            border-style: solid;
            border-width: 1px;
            box-shadow: 0 1px 10px #424242;
            padding: 35px;
        ">
        <span style="position: absolute; top: -16px; right: -14px; z-index: 99999; cursor: pointer" id="closeSuccess"><img src="https://njyha-zcmp.maillist-manage.eu/images/videoclose.png" /></span>
        <div id="zcOptinSuccessPanel"></div>
    </div>

    <?php else: ?>
    <div class="rounded border p-5">
        <h2>Newsletter registration for wikipedia challenge</h2>
    </div>
    <?php endif; ?>
</div>
