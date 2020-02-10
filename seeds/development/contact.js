exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contact')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contact').insert([
        {
          id: '185c9f70-4bf3-11ea-9c04-7bf2546d41ba',
          firstName: 'Osama',
          middleName: 'Bin',
          lastName: 'Laden',
        },
        {
          id: '1db5c53c-4bf3-11ea-ab9e-bb19a414f130',
          firstName: 'Barrack',
          middleName: 'Josef',
          lastName: 'Obama',
        },
        {
          id: '22e7a138-4bf3-11ea-a5ac-77778eb6ab4f',
          firstName: 'Xi',
          middleName: 'Jin',
          lastName: 'Ping',
        },
      ]);
    });
};
