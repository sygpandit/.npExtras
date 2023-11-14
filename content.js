function injectForm() {
    var domains = [".com.np", " .academy.np", ".accountants.np", ".actor.np", ".aero.np", ".agency.np", ".asia.np", ".associates.np", ".audio.np", ".bar.np", ".bargains.np", ".beer.np", ".bid.np", ".bike.np", ".bio.np", ".biz.np", ".black.np", ".blue.np", ".boutique.np", ".build.np", ".builders.np", ".buzz.np", ".cab.np", ".camera.np", ".camp.np", ".capital.np", ".cards.np", ".care.np", ".careers.np", ".cash.np", ".catering.np", ".center.np", ".ceo.np", ".christmas.np", ".clinic.np", ".clothing.np", ".club.np", ".codes.np", ".coffee.np", ".college.np", ".community.np", ".company.np", ".computer.np", ".cool.np", ".coop.np", ".country.np", ".credit.np", ".creditcard.np", ".dental.np", ".diamonds.np", ".edu.np", ".email.np", ".engineering.np", ".estate.np", ".events.np", ".expert.np", ".finance.np", ".financial.np", ".fish.np", ".fishing.np", ".fitness.np", ".flights.np", ".florist.np", ".fund.np", ".furniture.np", ".futbol.np", ".gallery.np", ".gov.np", ".guitars.np", ".guru.np", ".hiphop.np", ".hiv.np", ".house.np", ".industries.np", ".info.np", ".ink.np", ".jobs.np", ".limited.np", ".link.np", ".management.np", ".marketing.np", ".media.np", ".menu.np", ".mil.np", ".mobi.np", ".museum.np", ".name.np", ".net.np", ".ninja.np", ".onl.np", ".org.np", ".partners.np", ".parts.np", ".photo.np", ".photos.np", ".pics.np", ".pink.np", ".pro.np", ".productions.np", ".products.np", ".properties.np", ".pub.np", ".red.np", ".rentals.np", ".repair.np", ".rest.np", ".rocks.np", ".services.np", ".shiksha.np", ".shoes.np", ".social.np", ".solar.np", ".solutions.np", ".space.np", ".supplies.np", ".supply.np", ".support.np", ".surf.np", ".surgery.np", ".systems.np", ".systems.np", ".tattoo.np", ".tax.np", ".technology.np", ".tel.np", ".tips.np", ".today.np", ".tools.np", ".town.np", ".trade.np", ".training.np", ".travel.np", ".university.np", ".vacations.np", ".ventures.np", ".villas.np", ".vision.np", ".vodka.np", ".voting.np", ".voyage.np", ".watch.np", ".webcam.np", ".wiki.np", ".works.np", ".wtf.np", " .xyz.np", " .zone.np "]

    var select = document.getElementsByName("domainExtension")[0]
    select.innerHTML = " "
    for (let i = 0; i < domains.length; i++) {
        var option = document.createElement("option")
        option.text = domains[i]
        option.value = domains[i]
        select.appendChild(option)
    }
}

window.onload = injectForm()
