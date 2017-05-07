module.exports = function (body) {
  return `
    <section>
      <div class="sub-heading">
        <h2 xx class="right">Message Sent</h2>
        <h2>
          <a class="listen" href="/"><i class="fa fa-arrow-left"></i></a>
        </h2>
      </div>
      <grid>
        <div col="1/12"></div>
        <div col="5/6">
          <card>
            <h5>${body.subject}</h5>
            From ${body.name} - ${body.email}
            <hr>
            <p>
              ${body.message}
            </p>
          </card>
        </div>
      </grid>
    </section>
  `;
}