package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("select p from Product p where p.city.name like ?1")
    Collection<Product> findProductByCity(String name);

    @Query("select p from Product p where p.category.title like ?1")
    Collection<Product> findProductByCategory(String title);

    //Filtro por ciudad y fechas
    @Query("SELECT distinct p FROM Product p left join p.reservation re WHERE  re.startDate not between :startDate and :finalDate and re.finalDate not between :startDate and :finalDate and p.city.name like :name or (re is null and p.city.name like :name)")
    Collection<Product> findProductByDateAndCity(@Param("startDate") Date startDate, @Param("finalDate") Date finalDate, @Param("name")String name ) ;

    //Filtro fechas
    @Query("SELECT distinct p FROM Product p left join p.reservation re WHERE  re.startDate not between :startDate and :finalDate and re.finalDate not between :startDate and :finalDate or (re is null)")
    Collection<Product> findProductByDate(@Param("startDate") Date startDate, @Param("finalDate") Date finalDate);


}
