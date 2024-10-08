<div class="flex flex-col">
    <h3 for="newsletter-signup-form" class="text-primary text-base"><?php _e('Newlsetter Anmeldung'); ?></h3>
    <form action="https://t874ad7c5.emailsys1a.net/191/2155/d537ac9314/subscribe/form.html" method="post"
        id="newsletter-signup-form">

        <ul class="no-bullet newsletter-form-minimal relative">
            <li style="position:absolute; z-index: -100; left:-6000px;" aria-hidden="true">
                <label class="field_label required" for="rm_email"><?php _e('E-Mail:'); ?> </label>
                <input type="text" class="form_field" name="rm_email" id="rm_email" value="" tabindex="-1" />
                <label class="field_label required" for="rm_comment">Comment: </label>
                <textarea class="form_field" name="rm_comment" tabindex="-1" id="rm_comment"></textarea>
            </li>
            <li>
                <label class="field_label required sr-only" for="email"><?php _e('E-Mail:'); ?> * </label>
                <input type="text" class="form_field form-input" name="email" id="email" value=""
                    placeholder="E-Mail" />
            </li>
            <li class="form_button absolute right-1 bottom-1">
                <input type="submit" class="form_button_submit btn btn" value="<?php _e('Anmelden'); ?>" />
            </li>
        </ul>
    </form>
</div>

<div x-data="{ open: false }" class="">
    <!-- Trigger -->
    <span x-on:click="open = true">
        <button type="button" class="btn btn-link btn-xs -mx-2">
            <?php _e('DSGVO Hinweis'); ?>
        </button>
    </span>

    <!-- Modal -->
    <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog"
        aria-modal="true" x-id="['dsgvo-modal']" :aria-labelledby="$id('dsgvo-modal')"
        class="fixed inset-0 z-10 overflow-y-auto">
        <!-- Overlay -->
        <div x-show="open" x-transition.opacity class="fixed inset-0 bg-gray-900 bg-opacity-50"></div>

        <!-- Panel -->
        <div x-show="open" x-transition x-on:click="open = false"
            class="relative flex min-h-screen items-center justify-center">
            <div x-on:click.stop x-trap.noscroll.inert="open"
                class="relative w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-lg">
                <!-- Title -->
                <h2 :id="$id('dsgvo-modal')"><?php _e('DSGVO Hinweis'); ?></h2>

                <!-- Content -->
                <p class="">
                    <?php _e('Indem ich meine E-Mail-Adresse eintrage, erkläre ich mich damit einverstanden, dass Wikimedia mich aufgrund meiner Einwilligung (Art. 6 Abs. 1 lit. a) DSGVO) per E-Mail bis auf Widerruf über Aktuelles informiert und die hierzu erforderlichen Datenverarbeitungen vornimmt. Ich kann meine Einwilligung jederzeit mit Wirkung für die Zukunft gegenüber Wikimedia widerrufen.
                    Nähere Informationen zur Datenverarbeitung bei Wikimedia und zu meinen Rechten finde ich unter <a href="https://www.wikimedia.de/datenschutz/">www.wikimedia.de/datenschutz/</a>.'); ?>
                </p>

                <!-- Buttons -->
                <div class="mt-8 flex space-x-2">
                    <button type="button" x-on:click="open = false" class="btn">
                        <?php _e('Close'); ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>